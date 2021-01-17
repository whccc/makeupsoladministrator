import React, { useEffect, useRef, useState } from 'react';
import {
    Section,
    ContainerProducto,
    Button,
    ContainerPage,
    ContainerPager,
    ContainerModalDelete
} from './styles';
import { FaPlus, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Inputs } from '../../components/Generales';
import { Products } from '../../components/Products';
import { StateLogin } from '../../hooks/useUser';
import { Modals } from '../../components/Modal';
import { ChildrenModalCreateProduct } from '../../components/ModalChildrenProduct';
import useProduct from '../../hooks/useProduct';
import { RoundNumber } from '../../Helpers';
import { NotFoundDataApi } from '../../components/NotFoundData';
import { Message } from '../../components/Message';
import { DeleteImage } from '../../firebase/client';

export const ProductsPage = () => {
    const [ShowModal, SetShowModal] = useState(false);
    const [ShowModalDetele, setShowModalDelete] = useState(false);
    const [strProductSearch, setStrProductSearch] = useState('');
    const [objProduct, setObjProduct] = useState({});
    const InputSearch = useRef(null);
    const [objMessage, setObjMessage] = useState({
        Type: '',
        Text: '',
        blnShow: false
    });
    const [intPagination, setIntPagination] = useState({
        Min: 1,
        Max: 2
    });
    //Hooks
    const { objProducts, GetProductsTenPagination, SearchProduct, DeleteProduct } = useProduct();
    if (!StateLogin()) {
        window.location = '/Login';
    }
    useEffect(() => {
        //Inital data products limit 10
        const InitialProducts = async () => {
            const intTotalProducts = await GetProductsTenPagination({
                Min: 0,
                Max: 15
            });
            //Number pagination products
            setIntPagination({
                Min: 1,
                Max: RoundNumber(intTotalProducts / 15)
            });
        };
        InitialProducts();
    }, []);
    //Inital Range Products
    const InitialProducts = () => {
        GetProductsTenPagination({ Min: 0, Max: 15 });
    };
    //FC Message
    const FCMessage = (objMessage) => {
        setObjMessage({ ...objMessage });
    };
    //Pagination Rigth
    const PaginationRigth = async () => {
        if (intPagination.Max == intPagination.Min || intPagination.Max == 0) {
            return;
        }
        setIntPagination({
            Min: intPagination.Min + 1,
            Max: intPagination.Max
        });

        await GetProductsTenPagination({
            Min: 15 * (intPagination.Min + 1) - 15,
            Max: 15 * (intPagination.Min + 1)
        });
    };

    //Pagination Left
    const PaginationLeft = async () => {
        if (intPagination.Min <= 1) {
            return;
        }
        setIntPagination({
            Min: intPagination.Min - 1,
            Max: intPagination.Max
        });

        await GetProductsTenPagination({
            Min: 15 * (intPagination.Min - 1) - 15,
            Max: 15 * (intPagination.Min - 1)
        });
    };

    //Search Product
    const SearchProducts = () => {
        if (strProductSearch.trim() == '') {
            FCMessage({
                Type: 'Danger',
                Text: 'Digite un producto para su busqueda.',
                blnShow: true
            });
            return;
        }
        SearchProduct(strProductSearch);
    };
    //Delete Product
    const DeleteProductFC = async () => {
        const Result = await DeleteProduct(objProduct);
        if (Result.data.Success) {
            for (let i = 0; i <= objProduct.ArrayImages.length - 1; i++) {
                //DeleteImagenFirebaseStorage
                DeleteImage(objProduct.ArrayImages[i]);
            }
            FCMessage({
                Type: 'Success',
                Text: 'Producto eliminado con éxito.',
                blnShow: true
            });
            setShowModalDelete(false);
            InitialProducts();
            return;
        }
        FCMessage({
            Type: 'Danger',
            Text: 'Ocurrio un error eliminando producto.',
            blnShow: true
        });
    };
    return (
        <ContainerPage>
            <div>
                <ContainerProducto>
                    <h2>Productos</h2>
                    <Inputs
                        ref={InputSearch}
                        onChange={(e) => setStrProductSearch(e.target.value)}
                        value={strProductSearch}
                        type="text"
                        placeholder="Buscar Producto"
                    />{' '}
                    <br />
                    <Message {...objMessage} setShowMessage={setObjMessage} />
                    <button onClick={SearchProducts}>Buscar</button>{' '}
                    <button
                        onClick={() => {
                            InitialProducts();
                            setStrProductSearch('');
                        }}>
                        Reiniciar Busqueda
                    </button>
                </ContainerProducto>
                <ContainerPager>
                    <FaArrowLeft onClick={PaginationLeft} />
                    <p>
                        Página {intPagination.Min} de {intPagination.Max}
                    </p>
                    <FaArrowRight onClick={PaginationRigth} />
                </ContainerPager>
                <Section>
                    {objProducts.length != 0 ? (
                        objProducts.map((Elemento) => {
                            return (
                                <Products
                                    {...Elemento}
                                    FCDeleteProductModal={() => {
                                        setShowModalDelete(true);
                                        setObjProduct({ ...Elemento });
                                    }}
                                    FCUpdateProductModal={() => {
                                        setObjProduct({ ...Elemento });
                                        SetShowModal(true);
                                    }}
                                />
                            );
                        })
                    ) : (
                        <NotFoundDataApi strText="Productos no registrados." />
                    )}
                </Section>
            </div>
            <Button
                onClick={() => {
                    SetShowModal(true);
                    setObjProduct({});
                }}>
                <FaPlus />
            </Button>
            <Modals
                show={ShowModal}
                CloseModal={SetShowModal}
                Title={
                    Object.entries(objProduct).length == 0 ? 'Crear Producto' : 'Editar Producto'
                }>
                <ChildrenModalCreateProduct
                    CloseModal={SetShowModal}
                    UpdateStateProduct={InitialProducts}
                    objProductEdit={objProduct}
                />
            </Modals>{' '}
            <Modals
                show={ShowModalDetele}
                CloseModal={setShowModalDelete}
                Title="Eliminar Producto">
                <ContainerModalDelete>
                    ¿ Desea eliminar el producto <strong>{objProduct.strName}</strong> ?
                    <hr />
                    <button onClick={DeleteProductFC}>Si</button>{' '}
                    <button
                        onClick={() => {
                            setShowModalDelete(false);
                        }}>
                        Cancelar
                    </button>
                </ContainerModalDelete>
            </Modals>
        </ContainerPage>
    );
};
