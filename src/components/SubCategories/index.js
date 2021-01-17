import React, { useContext, useEffect, useState } from 'react';
import { Section, Input, Button, Select, ContainerTable } from './styles';
import Table from 'react-bootstrap/Table';
import { Modals } from '../Modal';
import useSubCategories from '../../hooks/useSubCategories';
import { Message } from '../Message';
import { URL_API } from '../../../VariablesEntorno';
import axios from 'axios';
import { FaTrash, FaEdit } from 'react-icons/fa';
import CategoryContext from '../../Context/CategoryContext';

const Inputs = (objInput) => {
    return <Input {...objInput} />;
};
const ValidateForm = (strSubCategory, SetBlnShowMessage, StrIdCategory, strCategory, SetUpdate) => {
    if (strSubCategory.trim() == '') {
        SetBlnShowMessage({
            Type: 'Danger',
            Text: 'Digite una sub categoria',
            blnShow: true
        });
        return;
    }
    //Save subcategory
    Save(strSubCategory, StrIdCategory, SetBlnShowMessage, strCategory, SetUpdate);
};
//Select Categories
const Selects = ({ objCategories, onChange, StrIdCategory }) => {
    return (
        <Select
            value={StrIdCategory}
            onChange={(e) => {
                const { options, selectedIndex, value } = e.target;
                const name = options[selectedIndex].innerHTML;
                onChange(value, name);
            }}>
            {objCategories.length == 0 ? (
                <option>Sin categorias</option>
            ) : (
                objCategories.map((Elemento, index) => {
                    return (
                        <option value={Elemento._id} key={index}>
                            {Elemento.strName}
                        </option>
                    );
                })
            )}
        </Select>
    );
};
//Body Table
const TableBody = (
    objSubCategories,
    SetBooleanSub,
    SetStringTypeAction,
    SetStrSubCategory,
    SetStrIdSubCategory
) => {
    if (objSubCategories.length == 0) {
        return (
            <tr>
                <td></td>
                <td>
                    <h3>No contiene categorias relacionadas.</h3>
                </td>
                <td></td>
                <td></td>
            </tr>
        );
    }
    return objSubCategories.map((Element, Index) => {
        return (
            <tr key={Index}>
                <td>{Index + 1}</td>
                <td>{Element.strName}</td>
                <td>{Element.strNameCategory}</td>
                <td>
                    <FaEdit
                        onClick={() => {
                            SetBooleanSub(true);
                            SetStringTypeAction('Update');
                            SetStrSubCategory(Element.strName);
                            SetStrIdSubCategory(Element._id);
                        }}
                    />
                    {'  '}
                    <FaTrash
                        onClick={() => {
                            SetBooleanSub(true);
                            SetStringTypeAction('Delete');
                            SetStrSubCategory(Element.strName);
                            SetStrIdSubCategory(Element._id);
                        }}
                    />
                </td>
            </tr>
        );
    });
};
//Save Sub Category
const Save = async (strSubCategory, strIdCategory, SetBlnShowMessage, strCategory, SetUpdate) => {
    const objRes = await axios.post(`${URL_API}/subcategories`, {
        strName: strSubCategory,
        strIdCategory,
        strNameCategory: strCategory
    });
    if (!objRes.data.Success) {
        SetBlnShowMessage({
            Type: 'Danger',
            Text: objRes.data.Result,
            blnShow: true
        });
    } else {
        SetBlnShowMessage({
            Type: 'Success',
            Text: objRes.data.Result,
            blnShow: true
        });
        SetUpdate(true);
    }
};
export const SubCategories = () => {
    //State sub category
    const [strIdSubCategory, SetStrIdSubCategory] = useState('');
    const [strSubCategory, SetStrSubCategory] = useState('');

    const [BooleanSub, SetBooleanSub] = useState(false);
    const [strCategory, SetStrCategory] = useState('');
    const [StrIdCategory, SetStrIdCategory] = useState('');
    const [StringTypeAction, SetStringTypeAction] = useState('');
    //Hooks
    const { objCategories } = useContext(CategoryContext);
    const { objSubCategories, SetUpdate, UpdateSubCategory } = useSubCategories(StrIdCategory);

    //Message
    const [blnShowMessage, SetBlnShowMessage] = useState({
        blnShow: false,
        Type: '',
        Text: ''
    });
    //Loading firts category
    useEffect(() => {
        if (objCategories.length != 0) {
            SetStrIdCategory(objCategories[0]._id);
            SetStrCategory(objCategories[0].strName);
            SetUpdate(true);
        }
    }, [objCategories]);

    useEffect(() => {
        setTimeout(() => {
            SetBlnShowMessage({
                blnShow: false
            });
        }, 8000);
    }, [blnShowMessage.blnShow]);

    //Modal Delete Update
    const ModalDeleteOrUpdate = () => {
        if (StringTypeAction == 'Delete') {
            return <h2>¿Desea¡?</h2>;
        } else {
            return (
                <div>
                    <h4>Actualizar Sub Categoria</h4>
                    <Inputs
                        onChange={(e) => {
                            SetStrSubCategory(e.target.value.trim());
                        }}
                        type="text"
                        placeholder="Sub Categoria"
                        value={strSubCategory}
                    />
                    <hr />
                    <Button
                        onClick={async () => {
                            SetStrSubCategory('');
                            const Result = await UpdateSubCategory({
                                _id: strIdSubCategory,
                                strName: strSubCategory
                            });
                            if (Result) {
                                SetUpdate(true);
                                SetBooleanSub(!BooleanSub);
                            }
                            SetStrSubCategory('');
                        }}>
                        Actualizar
                    </Button>{' '}
                    <Button
                        onClick={async () => {
                            SetBooleanSub(!BooleanSub);
                            SetStrSubCategory('');
                        }}>
                        Cancelar
                    </Button>
                </div>
            );
        }
    };

    return (
        <Section>
            <div>
                <h3>Sub Categorias</h3>
                <Selects
                    objCategories={objCategories}
                    onChange={(value, name) => {
                        SetStrIdCategory(value);
                        SetStrCategory(name);
                        SetUpdate(true);
                    }}
                    StrIdCategory={StrIdCategory}
                />

                <div>
                    <Inputs
                        onChange={(e) => {
                            SetStrSubCategory(e.target.value.trim());
                        }}
                        type="text"
                        placeholder="Sub Categoria"
                        value={strSubCategory}
                    />{' '}
                    <Button
                        onClick={() => {
                            ValidateForm(
                                strSubCategory,
                                SetBlnShowMessage,
                                StrIdCategory,
                                strCategory,
                                SetUpdate
                            );
                            SetStrSubCategory('');
                        }}>
                        Crear
                    </Button>
                </div>
                <Message
                    Text={blnShowMessage.Text}
                    blnShow={blnShowMessage.blnShow}
                    Type={blnShowMessage.Type}
                />
            </div>
            <ContainerTable>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre Sub Categoria</th>
                            <th>Categoria</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TableBody(
                            objSubCategories,
                            SetBooleanSub,
                            SetStringTypeAction,
                            SetStrSubCategory,
                            SetStrIdSubCategory
                        )}
                    </tbody>
                </Table>
            </ContainerTable>
            <Modals show={BooleanSub} CloseModal={SetBooleanSub}>
                {ModalDeleteOrUpdate()}
            </Modals>
        </Section>
    );
};
