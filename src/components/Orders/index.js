import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import {Container} from './styles'
import {FaSistrix,FaCheck,FaWindowClose} from 'react-icons/fa'
import {Inputs} from '../Generales'
import moment from 'moment'
import {Modals}  from '../Modal'

export const OrdersPending = () => {
    const today = moment().format('YYYY-MM-DD');
    const [ShowModal,SetShowModal]=useState(false);


    //Cerrar modal
    const CloseModal=()=>{
        SetShowModal(false);
    }


    return (
    <Container>
        <h2>Pedidos Pendientes</h2>
        <Inputs type="date" value={today} />
        <Inputs type="text" placeholder='Buscar' /><FaSistrix/>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Celular</th>
                    <th>Correo</th>
                    <th>Valor</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>wilson herney</td>
                    <td>castro cabrera</td>
                    <td>3113608269</td>
                    <td>wilsoncastro0710@gmail.com</td>
                    <td>$ 100.000</td>
                    <td>23-08-2020</td>
                    <td><FaSistrix
                        onClick={()=>{SetShowModal(true)}}
                    /><FaCheck/><FaWindowClose/></td>
                </tr>
                <tr>
                <td>1</td>
                    <td>wilson herney</td>
                    <td>castro cabrera</td>
                    <td>3113608269</td>
                    <td>wilsoncastro0710@gmail.com</td>
                    <td>$ 100.000</td>
                    <td>23-08-2020</td>
                </tr>
                <tr>
                <td>1</td>
                    <td>wilson herney</td>
                    <td>castro cabrera</td>
                    <td>3113608269</td>
                    <td>wilsoncastro0710@gmail.com</td>
                    <td>$ 100.000</td>
                    <td>23-08-2020</td>
                </tr>
            </tbody>
        </Table>
        <Modals
            show={ShowModal}
            CloseModal={CloseModal}
            Title="Pedidos pendientes"
        />
    </Container>
    
    
    );
}



export const OrdersDespachados = () => {
    const today = moment().format('YYYY-MM-DD');
    const [ShowModal,SetShowModal]=useState(false);


    //Cerrar modal
    const CloseModal=()=>{
        SetShowModal(false);
    }


    return (
    <Container>
        <h2>Pedidos Despachados</h2>
        <Inputs type="date" value={today} />
        <Inputs type="text" placeholder='Buscar' /><FaSistrix/>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Celular</th>
                    <th>Correo</th>
                    <th>Valor</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>wilson herney</td>
                    <td>castro cabrera</td>
                    <td>3113608269</td>
                    <td>wilsoncastro0710@gmail.com</td>
                    <td>$ 100.000</td>
                    <td>23-08-2020</td>
                    <td><FaSistrix
                        onClick={()=>{SetShowModal(true)}}
                    /><FaCheck/><FaWindowClose/></td>
                </tr>
                <tr>
                <td>1</td>
                    <td>wilson herney</td>
                    <td>castro cabrera</td>
                    <td>3113608269</td>
                    <td>wilsoncastro0710@gmail.com</td>
                    <td>$ 100.000</td>
                    <td>23-08-2020</td>
                </tr>
                <tr>
                <td>1</td>
                    <td>wilson herney</td>
                    <td>castro cabrera</td>
                    <td>3113608269</td>
                    <td>wilsoncastro0710@gmail.com</td>
                    <td>$ 100.000</td>
                    <td>23-08-2020</td>
                </tr>
            </tbody>
        </Table>
        <Modals
            show={ShowModal}
            CloseModal={CloseModal}
            Title="Pedidos despachados"
        />
    </Container>);
}