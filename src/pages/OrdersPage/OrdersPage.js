import React from 'react';
import { Container, ContainerPage } from './styles';
import { OrdersPending, OrdersDespachados } from '../../components/Orders';
import { StateLogin } from '../../hooks/useUser';

export const OrdersPage = () => {
    if (!StateLogin()) {
        window.location = '/Login';
    }
    return (
        <ContainerPage>
            <Container>
                <OrdersPending />
                <OrdersDespachados />
            </Container>
        </ContainerPage>
    );
};
