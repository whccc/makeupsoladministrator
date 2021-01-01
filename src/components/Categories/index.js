import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Section, Button, ContainerTable, ContainerModal } from './styles';
import { Inputs } from '../Generales';
import { URL_API } from '../../../VariablesEntorno';
import useCategories from '../../hooks/useCategories';
import { Message } from '../Message';
import { Modals } from '../Modal';
import axios from 'axios';

//Validate
const ValidateForm = (strCategory, SetCategoriesRange, SetShowMessage, SetStrCategory) => {
    if (strCategory.trim() == '') {
        SetShowMessage({
            blnShow: true,
            strMessage: 'Digite una categoria.',
            Type: 'Danger'
        });
        setTimeout(() => {
            SetShowMessage({
                blnShow: false
            });
        }, 2500);
        return;
    }
    //Create Category
    SaveCategory(strCategory, SetCategoriesRange, SetShowMessage, SetStrCategory);
};
//Save Category
const SaveCategory = async (strCategory, SetCategoriesRange, SetShowMessage, SetStrCategory) => {
    const Response = await axios.post(`${URL_API}/categories`, { strName: strCategory });
    if (!Response.data.Success) {
        SetShowMessage({
            blnShow: true,
            strMessage: Response.data.Result,
            Type: 'Danger'
        });
        return;
    }
    SetShowMessage({
        blnShow: true,
        strMessage: 'Categoria creada con éxito.',
        Type: 'Success'
    });
    //Set hook Categories
    SetCategoriesRange({ Min: 0, Max: 10 });
    setTimeout(() => {
        SetShowMessage({
            blnShow: false
        });
        SetStrCategory('');
    }, 2000);
};
//Data table
const Tr = (strData, SetstrEditCategory, SetBlnModal, SetStrDeleteCategory) => {
    return strData.map((Data, Index) => {
        return (
            <tr key={Index}>
                <td>{Index + 1}</td>
                <td>{Data.strName}</td>
                <td>
                    <FaEdit
                        onClick={() => {
                            SetstrEditCategory({
                                blnShow: true,
                                _id: Data._id,
                                strText: Data.strName
                            });
                        }}
                    />
                    {'  '}
                    <FaTrash
                        onClick={() => {
                            SetStrDeleteCategory({
                                _id: Data._id,
                                strName: Data.strName
                            });
                            SetBlnModal(true);
                        }}
                    />
                </td>
            </tr>
        );
    });
};
//Edit Category
const EditCategory = async (
    strEditCategory,
    SetstrEditCategory,
    SetShowMessage,
    SetCategoriesRange
) => {
    try {
        const objRes = await axios.put(`${URL_API}/categories`, {
            ...strEditCategory
        });
        SetShowMessage({
            blnShow: true,
            strMessage: objRes.data.Result,
            Type: 'Success'
        });

        //Set hook Categories
        SetCategoriesRange({ Min: 0, Max: 10 });
        SetstrEditCategory({ blnShow: false });
        setTimeout(() => {
            SetShowMessage({
                blnShow: false
            });
        }, 2000);
    } catch (Error) {
        console.log(Error);
    }
};
//Data Modal Delete Category
const DeleteCategory = (StrDeleteCategory, SetBlnModal) => {
    //Data
    const { _id, strName } = StrDeleteCategory;
    //Delete category
    const Delete = async (objCategory) => {
        await axios.delete(`${URL_API}/categories`, { data: { ...objCategory } });
    };
    return (
        <ContainerModal>
            ¿Desea Eliminar la categoria <strong>{strName}</strong>?
            <br />
            <Button
                onClick={() => {
                    Delete(StrDeleteCategory);
                }}>
                Si
            </Button>{' '}
            <Button
                onClick={() => {
                    SetBlnModal(false);
                }}>
                Cancelar
            </Button>
        </ContainerModal>
    );
};
export const Categories = () => {
    const [strCategory, SetStrCategory] = useState('');

    const [ShowMessage, SetShowMessage] = useState({
        blnShow: false,
        strMessage: '',
        Type: ''
    });

    const [strEditCategory, SetstrEditCategory] = useState({
        blnShow: false,
        _id: null,
        strText: ''
    });

    const [StrDeleteCategory, SetStrDeleteCategory] = useState({
        _id: null,
        strName: ''
    });
    const [blnShowModal, SetBlnModal] = useState(false);

    let { objCategoriesRange, SetCategoriesRange } = useCategories();
    return (
        <>
            <Section>
                <div>
                    <h3>Categorias</h3>
                    {!strEditCategory.blnShow ? (
                        <div>
                            <Inputs
                                onChange={(e) => SetStrCategory(e.target.value)}
                                value={strCategory}
                                type="text"
                                placeholder="Categoria"
                            />{' '}
                            <Button
                                onClick={() => {
                                    ValidateForm(
                                        strCategory,
                                        SetCategoriesRange,
                                        SetShowMessage,
                                        SetStrCategory
                                    );
                                }}>
                                Crear
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <Inputs
                                value={strEditCategory.strText}
                                onChange={(e) =>
                                    SetstrEditCategory({
                                        _id: strEditCategory._id,
                                        blnShow: true,
                                        strText: e.target.value.trim()
                                    })
                                }
                                placeholder="Editar"
                            />{' '}
                            <Button
                                onClick={() => {
                                    EditCategory(
                                        strEditCategory,
                                        SetstrEditCategory,
                                        SetShowMessage,
                                        SetCategoriesRange
                                    );
                                }}>
                                Editar
                            </Button>{' '}
                            <Button
                                onClick={() => {
                                    SetstrEditCategory({ blnShow: false });
                                }}>
                                Cancelar
                            </Button>
                        </div>
                    )}

                    <Message
                        Text={ShowMessage.strMessage}
                        Type={ShowMessage.Type}
                        blnShow={ShowMessage.blnShow}
                    />
                </div>
                <ContainerTable>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Tr(
                                objCategoriesRange,
                                SetstrEditCategory,
                                SetBlnModal,
                                SetStrDeleteCategory
                            )}
                        </tbody>
                    </Table>
                </ContainerTable>
            </Section>
            <Modals
                show={blnShowModal}
                CloseModal={() => {
                    SetBlnModal(!blnShowModal);
                }}
                Title="Eliminar Categoria">
                {DeleteCategory(StrDeleteCategory, SetBlnModal)}
            </Modals>
        </>
    );
};
