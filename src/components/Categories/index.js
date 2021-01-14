import React, { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Section, Button, ContainerTable, ContainerModal } from './styles';
import { Inputs } from '../Generales';
import { URL_API } from '../../../VariablesEntorno';
import useCategories from '../../hooks/useCategories';
import { Message } from '../Message';
import { Modals } from '../Modal';
import axios from 'axios';
import CategoryContext from '../../Context/CategoryContext';

//Validate
const ValidateForm = (strCategory, SetShowMessage, SetStrCategory, UpdateContextCategory) => {
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
    SaveCategory(strCategory, SetShowMessage, SetStrCategory, UpdateContextCategory);
};
//Save Category
const SaveCategory = async (strCategory, SetShowMessage, SetStrCategory, UpdateContextCategory) => {
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
    setTimeout(() => {
        SetShowMessage({
            blnShow: false
        });
        SetStrCategory('');
    }, 2000);
    UpdateContextCategory(true);
};
//Data table
const Tr = (strData, SetstrEditCategory, SetBlnModal, SetStrDeleteCategory) => {
    if (strData.length == 0) {
        return (
            <tr>
                <td></td>
                <td>
                    <h3>No contiene categorias.</h3>
                </td>
                <td></td>
            </tr>
        );
    }
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
    UpdateContextCategory
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
        SetstrEditCategory({ blnShow: false });
        setTimeout(() => {
            SetShowMessage({
                blnShow: false
            });
        }, 2000);
        UpdateContextCategory(true);
    } catch (Error) {
        console.log(Error);
    }
};
//Data Modal Delete Category
const DeleteCategory = (StrDeleteCategory, SetBlnModal, SetShowMessage, UpdateContextCategory) => {
    //Data
    const { _id, strName } = StrDeleteCategory;
    //Delete category
    const Delete = async (objCategory) => {
        const DataResponse = await axios.delete(`${URL_API}/categories`, {
            data: { ...objCategory }
        });
        let objMessage = {
            blnShow: true,
            strMessage: DataResponse.data.Success
                ? 'Categoria eliminada con exito.'
                : 'No se puede eliminar la categoria.Contiene una relación con subcategorias.',
            Type: DataResponse.data.Success ? 'Success' : 'Danger'
        };
        SetShowMessage({ ...objMessage });
        setTimeout(() => {
            SetShowMessage({
                blnShow: false
            });
        }, 2000);
        SetBlnModal(false);
        UpdateContextCategory(true);
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

    //let {  objCategoriesRange, SetCategoriesRange, SetCategories } = useCategories();

    const { objCategories, UpdateContextCategory } = useContext(CategoryContext);
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
                                        SetShowMessage,
                                        SetStrCategory,
                                        UpdateContextCategory
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
                                        UpdateContextCategory
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
                                objCategories,
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
                {DeleteCategory(
                    StrDeleteCategory,
                    SetBlnModal,
                    SetShowMessage,
                    UpdateContextCategory
                )}
            </Modals>
        </>
    );
};
