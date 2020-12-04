import React from 'react';
import {NavBar} from './components/NavBar'
import {GlobalStyle,Container} from './styles/GlobalStyles'
import {CategoriesPage} from './pages/CategoriesPage/CategoriesPage'
import {Router} from '@reach/router'
import {ProductsPage} from './pages/Products/ProductsPage'
import {OrdersPage} from './pages/OrdersPage/OrdersPage'
import {ScrollToTop}  from './components/ScrollTop/index.js'
export const App=()=>{
    
    return(
        <div>
            <GlobalStyle/>
            <NavBar/>
            <Container>
                <Router primary={false}>
                <ScrollToTop path="/">
                    <CategoriesPage path="/Categorias"/>
                    <ProductsPage path="/Productos"/>
                    <OrdersPage path="/Pedidos"/>
                    </ScrollToTop>
                </Router>
            </Container>
        </div>
    );
}
