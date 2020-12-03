import React, { Fragment } from 'react';
import { Section,Button } from './styles'
import Table from 'react-bootstrap/Table'
import {SubCategories} from '../SubCategories'
import {FaTrash,FaEdit} from "react-icons/fa"
import {Inputs} from '../Generales'

const Buttons =({
    Text
})=>{
    return <Button>{Text}</Button>
}



export const Categories = () => {
    return (
        <Fragment>
        <Section>
            <div>
                <h3>Categorias</h3>
                <div>
                    <Inputs type="text" placeholder="Categoria"/>{" "}
                    <Buttons Text="Crear"/>
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
                        <td><FaEdit/>{"  "}<FaTrash/></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Maquillaje</td>
                        <td><FaEdit/>{"  "}<FaTrash/></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Barberia</td>
                        <td><FaEdit/>{"  "}<FaTrash/></td>
                    </tr>
                </tbody>
            </Table>
        </Section>
        <SubCategories/>
        </Fragment>
        )
}