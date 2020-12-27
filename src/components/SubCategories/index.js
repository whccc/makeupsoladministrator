import React from 'react';
import { Section, Input, Button, Select } from './styles';
import Table from 'react-bootstrap/Table';
import { FaTrash, FaEdit } from 'react-icons/fa';

const Inputs = ({ type, placeholder }) => {
    return <Input type={type} placeholder={placeholder} />;
};
const Buttons = ({ Text }) => {
    return <Button>{Text}</Button>;
};

const Selects = ({ options }) => {
    return (
        <Select>
            {options.map((Elemento, index) => {
                return <option key={index}>{Elemento.Name}</option>;
            })}
        </Select>
    );
};
export const SubCategories = () => {
    const Json = {
        options: [
            {
                Name: 'Electricos'
            },
            {
                Name: 'Maquillaje'
            }
        ]
    };

    return (
        <Section>
            <div>
                <h3>Sub Categorias</h3>
                <Selects options={Json.options} />
                <div>
                    <Inputs type="text" placeholder="Sub Categoria" /> <Buttons Text="Crear" />
                </div>
            </div>
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
                    <tr>
                        <td>1</td>
                        <td>Facial</td>
                        <td>Rostro</td>
                        <td>
                            <FaEdit />
                            {'  '}
                            <FaTrash />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Maquillaje</td>
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
                        <td>Maquillaje</td>
                        <td>
                            <FaEdit />
                            {'  '}
                            <FaTrash />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Section>
    );
};
