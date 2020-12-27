import React, { Fragment, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Section, Button } from './styles';
import { Inputs } from '../Generales';
import { URL_API } from '../../../VariablesEntorno';
import axios from 'axios';

const Buttons = ({ Text }) => <Button>{Text}</Button>;

//Save Category
const SaveCategory = async (strCategory) => {
    const Response = await axios.post(`${URL_API}/categories`, strCategory);
    console.log(Response);
};

export const Categories = () => {
    const [strCategory, SetStrCategory] = useState('');
    SaveCategory();
    return (
        <>
            <Section>
                <div>
                    <h3>Categorias</h3>
                    <div>
                        <Inputs
                            onChange={(e) => SetStrCategory(e.value)}
                            value={strCategory}
                            type="text"
                            placeholder="Categoria"
                        />{' '}
                        <Buttons Text="Crear" />
                    </div>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Facial</td>
                            <td>
                                <FaEdit />
                                {'  '}
                                <FaTrash />
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Maquillaje</td>
                            <td>
                                <FaEdit />
                                {'  '}
                                <FaTrash />
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Barberia</td>
                            <td>
                                <FaEdit />
                                {'  '}
                                <FaTrash />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Section>
        </>
    );
};
