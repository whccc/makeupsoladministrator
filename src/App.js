import React from 'react';
import { GlobalStyle, Container } from './styles/GlobalStyles';
import { NavBar } from './components/NavBar';
import { CategoriesPage } from './pages/CategoriesPage/CategoriesPage';
import { Router } from '@reach/router';
import { ProductsPage } from './pages/Products/ProductsPage';
import { OrdersPage } from './pages/OrdersPage/OrdersPage';
import { ScrollToTop } from './components/ScrollTop/index.js';
import { Login } from './components/Login';
import { StateLogin } from './hooks/useUser';

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <>
                {!StateLogin() ? (
                    <Router primary={false}>
                        <Login default />
                    </Router>
                ) : (
                    <>
                        <NavBar />
                        <Container>
                            <Router primary={false}>
                                <ScrollToTop path="/">
                                    <CategoriesPage path="/Categorias" />
                                    <ProductsPage path="/Productos" />
                                    <OrdersPage path="/Pedidos" />
                                </ScrollToTop>
                            </Router>
                        </Container>
                    </>
                )}
            </>
        </>
    );
};
