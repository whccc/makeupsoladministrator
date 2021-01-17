import React, { useState, useEffect, useRef } from 'react';
import Img from '../../img/addimg.png';
import useCategories from '../../hooks/useCategories';
import useSubCategories from '../../hooks/useSubCategories';
import useProduct from '../../hooks/useProduct';
import { UploadImage, DeleteImage } from '../../firebase/client';
import { ContainerModal, ContainerDataImg, ContainerImg, ContainerPullImages } from './styled';
import { Message } from '../Message';
export const ChildrenModalCreateProduct = ({ UpdateStateProduct, CloseModal, objProductEdit }) => {
    const [Progress, SetProgress] = useState(0);
    const [PullImage, SetPullImage] = useState([]);
    const [ImgDefault, SetImgDefault] = useState(Img);
    const [IndexImgSelect, SetIndexImgSelect] = useState(0);
    const [objMessageData, setObjMessageData] = useState({
        Text: '',
        blnShow: false,
        Type: ''
    });
    const [Disable, setDisable] = useState(false);
    //Product
    const [StrName, SetStrName] = useState('');
    const [StrIdCategory, SetStrIdCategory] = useState('');
    const [StrIdSubCategory, SetStrIdSubCategory] = useState('');
    const [StrPrice, SetStrPrice] = useState('0');
    const [StrDescription, SetStrDescription] = useState('');
    const InputCode = useRef(null);
    const InputName = useRef(null);
    const InputPrice = useRef(null);
    const InputDescription = useRef(null);
    //Custom Hooks
    const { objCategories } = useCategories();
    const { CreateProduct, EditProduct } = useProduct();
    const { objSubCtgories, SetUpdate, GetSubCategory } = useSubCategories('');
    //EFfect for Category
    useEffect(() => {
        const InitialIdCategoryForSubCategory = () => {
            let StrIdCategoryInitial = null;
            if (objCategories.length != 0) {
                StrIdCategoryInitial = objCategories[0]._id;
                GetSubCategory(StrIdCategoryInitial);
                SetStrIdCategory(StrIdCategoryInitial);
            } else {
                SetStrIdCategory('');
            }
        };
        if (Object.entries(objProductEdit).length == 0) {
            InitialIdCategoryForSubCategory();
        }
    }, [objCategories]);
    //Effect for Sub Category
    useEffect(() => {
        const InitialIdSubCategoryForProduct = () => {
            if (objSubCtgories.length != 0) {
                SetStrIdSubCategory(objSubCtgories[0]._id);
            } else {
                SetStrIdSubCategory('');
            }
        };

        if (Object.entries(objProductEdit).length == 0) {
            InitialIdSubCategoryForProduct();
        }
    }, [objSubCtgories]);

    //Edit PRoduct
    useEffect(() => {
        const DataEditProduct = () => {
            SetStrName(objProductEdit.strName);
            SetStrPrice(objProductEdit.strPrice);
            SetStrDescription(objProductEdit.strDescription);
            SetStrIdCategory(objProductEdit.strIdCategory);
            SetStrIdSubCategory(objProductEdit.strIdSubCategory);
            GetSubCategory(objProductEdit.strIdCategory);
            SetPullImage(objProductEdit.ArrayImages);
            SetImgDefault(objProductEdit.ArrayImages[0]);
        };
        if (Object.entries(objProductEdit).length != 0) {
            DataEditProduct();
        }
    }, []);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            let ArrayImages = Object.values(e.target.files);
            //Edit product
            if (Object.entries(objProductEdit).length != 0) {
                ArrayImages = ArrayImages.concat(PullImage);
            }
            SetPullImage(ArrayImages);
            SetImgDefault(URL.createObjectURL(e.target.files[0]));
            SetIndexImgSelect(0);
        }
    };

    const handleUpload = async (ArrayUrlImageDelete) => {
        let ArrayURL = [];

        for (let i = 0; i <= PullImage.length - 1; i++) {
            /*it is determined if the image upload is per file.
              if it is file upload for firebase it is loaded validating the type.
              otherwise it is indicating that the product is being edited and it is added
              to the Array of URL to edit
             */
            if (PullImage[i].type != undefined) {
                const URL = await UploadImage(PullImage[i], SetProgress);
                ArrayURL.push(URL);
                SetProgress(0);
            } else {
                if (ArrayUrlImageDelete.indexOf(PullImage[i]) != 1) {
                    ArrayURL.push(PullImage[i]);
                }
            }
        }
        return ArrayURL;
    };
    const Imagen = (Img) => {
        let URLImg = null;
        const file = Img,
            imageType = /image.*/;
        if (file.type != undefined) {
            if (!file.type.match(imageType)) {
                SetPullImage([]);
                return;
            }
            URLImg = URL.createObjectURL(Img);
        } else {
            URLImg = Img;
        }
        return URLImg;
    };

    const HandledSelectImg = (Img, IndexImagePull) => {
        if (Img.type != undefined) {
            SetImgDefault(URL.createObjectURL(PullImage[IndexImagePull]));
        } else {
            SetImgDefault(Img);
        }
        SetIndexImgSelect(IndexImagePull);
    };

    const RemovedImgPullImage = (Images, IndexImagePull) => {
        let ArrayPullImage = PullImage.filter((item) => item != Images);
        let intIndexImg = IndexImagePull == 0 ? 0 : IndexImagePull - 1;
        SetIndexImgSelect(intIndexImg);
        SetPullImage(ArrayPullImage);
        if (ArrayPullImage.length == 0) {
            SetImgDefault(Img);
        } else {
            SetImgDefault(
                ArrayPullImage[intIndexImg].type != undefined
                    ? URL.createObjectURL(ArrayPullImage[intIndexImg])
                    : ArrayPullImage[intIndexImg]
            );
        }
    };
    //Create product
    const CreateProductMD = async () => {
        if (!ValidateDataFormProduct()) {
            return;
        }
        setDisable(true);
        const URL = await handleUpload(null);
        const blnResult = await CreateProduct({
            strName: StrName,
            strPrice: StrPrice,
            strIdCategory: StrIdCategory,
            strIdSubCategory: StrIdSubCategory,
            strDescription: StrDescription,
            ArrayImages: URL
        });
        if (blnResult.Success) {
            MessageFC({ Type: 'Success', blnShow: true, Text: 'Producto creado con éxito.' });
            UpdateStateProduct();
            SetStrName('');
            SetStrDescription('');
            SetStrPrice(0);
            SetPullImage([]);
            SetImgDefault(Img);
        } else {
            MessageFC({
                Type: 'Danger',
                blnShow: true,
                Text: 'Ocurrio un error creando el producto.'
            });
        }
        setDisable(false);
    };
    //Edit Product
    const EditProductFC = async () => {
        if (!ValidateDataFormProduct()) {
            return;
        }
        let ArrayUrlImageDelete = objProductEdit.ArrayImages.filter(
            (elemento) => PullImage.indexOf(elemento) == -1
        );
        for (let i = 0; i <= ArrayUrlImageDelete.length - 1; i++) {
            DeleteImage(ArrayUrlImageDelete[i]);
        }
        //Filter images not delete of the pull of images
        setDisable(true);
        const URL = await handleUpload(ArrayUrlImageDelete);
        const Result = await EditProduct({
            _id: objProductEdit._id,
            strName: StrName,
            strPrice: StrPrice,
            strIdCategory: StrIdCategory,
            strIdSubCategory: StrIdSubCategory,
            strDescription: StrDescription,
            ArrayImages: URL
        });
        if (Result.data.Success) {
            MessageFC({ Type: 'Success', blnShow: true, Text: 'Producto editado con éxito.' });
            UpdateStateProduct();
        } else {
            MessageFC({
                Type: 'Danger',
                blnShow: true,
                Text: 'Ocurrio un error editando el producto.'
            });
        }
        setDisable(false);
    };
    //Validate Data Form
    const ValidateDataFormProduct = () => {
        if (StrName == '') {
            InputName.current.focus();
            MessageFC({ Type: 'Danger', blnShow: true, Text: 'Digite un nombre.' });
            return false;
        }
        if (StrPrice == '' || StrPrice == '0') {
            InputPrice.current.focus();
            MessageFC({ Type: 'Danger', blnShow: true, Text: 'Digite un precio.' });
            return false;
        }
        if (StrIdCategory.trim() == '') {
            MessageFC({ Type: 'Danger', blnShow: true, Text: 'Seleccione una categoria.' });
            return false;
        }
        if (StrIdSubCategory.trim() == '') {
            MessageFC({ Type: 'Danger', blnShow: true, Text: 'Seleccione una subcategoria.' });
            return false;
        }
        if (StrDescription == '') {
            InputDescription.current.focus();
            MessageFC({ Type: 'Danger', blnShow: true, Text: 'Digite un descripción.' });
            return false;
        }
        if (PullImage.length == 0) {
            MessageFC({ Type: 'Danger', blnShow: true, Text: 'Seleccione una imagen.' });
            return false;
        }
        return true;
    };
    //Message
    const MessageFC = ({ Type, blnShow, Text }) => {
        setObjMessageData({ Type, blnShow, Text });
    };
    return (
        <ContainerModal>
            <ContainerImg>
                <label style={{ background: 'none', padding: '0px' }} for="FileImgProduct">
                    <img src={ImgDefault} />
                </label>
                <ContainerPullImages>
                    {PullImage.map((Img, Index) => {
                        return (
                            <div key={Index}>
                                <img
                                    style={{
                                        border: `1px solid ${
                                            Index == IndexImgSelect
                                                ? 'var(--bg-primary-blue)'
                                                : '#ddd'
                                        }`
                                    }}
                                    src={Imagen(Img, Index)}
                                    onClick={() => {
                                        HandledSelectImg(Img, Index);
                                    }}
                                />

                                <div
                                    style={{ visibility: Disable ? 'hidden' : 'visible' }}
                                    onClick={() => {
                                        RemovedImgPullImage(Img, Index);
                                    }}>
                                    <span>X</span>
                                </div>
                            </div>
                        );
                    })}
                </ContainerPullImages>
                <label disabled={Disable} for="FileImgProduct">
                    Cargar imagen...
                </label>
                <input
                    accept="image/*"
                    multiple
                    id="FileImgProduct"
                    type="file"
                    onChange={handleChange}
                    disabled={Disable}
                />
                <progress value={Progress} max="100" />
            </ContainerImg>
            <ContainerDataImg>
                <input
                    placeholder="Nombre"
                    onChange={(e) => {
                        SetStrName(e.target.value);
                    }}
                    ref={InputName}
                    value={StrName}
                    disabled={Disable}
                />
                <input
                    placeholder="Precio"
                    type="number"
                    onChange={(e) => {
                        SetStrPrice(e.target.value.trim());
                    }}
                    disabled={Disable}
                    value={StrPrice}
                    ref={InputPrice}
                />
                <select
                    disabled={Disable}
                    onChange={(e) => {
                        GetSubCategory(e.target.value.trim());
                        SetStrIdCategory(e.target.value.trim());
                    }}>
                    {objCategories.map((Category, Index) => {
                        return (
                            <option
                                key={Index}
                                selected={Category._id == StrIdCategory}
                                value={Category._id}>
                                {Category.strName}
                            </option>
                        );
                    })}
                </select>
                <select
                    disabled={Disable}
                    onChange={(e) => {
                        SetStrIdSubCategory(e.target.value.trim());
                    }}>
                    {objSubCtgories.map((SubCategory, Index) => {
                        return (
                            <option
                                key={Index}
                                value={SubCategory._id}
                                selected={SubCategory._id == StrIdSubCategory}>
                                {SubCategory.strName}
                            </option>
                        );
                    })}
                </select>
                <textarea
                    disabled={Disable}
                    placeholder="Descripción"
                    onChange={(e) => {
                        SetStrDescription(e.target.value);
                    }}
                    ref={InputDescription}
                    value={StrDescription}></textarea>
                <Message {...objMessageData} setShowMessage={setObjMessageData} />
                <hr />
                {Disable && <div>Cargando producto porfavor espera...</div>}
                {Object.entries(objProductEdit).length === 0 ? (
                    <button disabled={Disable} onClick={CreateProductMD}>
                        Crear
                    </button>
                ) : (
                    <button onClick={EditProductFC} disabled={Disable}>
                        Editar
                    </button>
                )}{' '}
                <button
                    disabled={Disable}
                    onClick={() => {
                        CloseModal(false);
                    }}>
                    Cancelar
                </button>
            </ContainerDataImg>
        </ContainerModal>
    );
};
