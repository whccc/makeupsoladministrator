import React from 'react';
import { Section } from './styles'
import Table from 'react-bootstrap/Table'


export const Categories = () => {
    return (
        <Section>
            <Table striped bordered hover size="sm">
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
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Maquillaje</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Barberia</td>
                        <td>Otto</td>
                    </tr>
                </tbody>
            </Table>
        </Section>)
}