import React from 'react';
import {NavBar} from './components/NavBar'
import {GlobalStyle,Container} from './styles/GlobalStyles'
import {CategoriesPage} from './pages/CategoriesPage/CategoriesPage'
import {Router} from '@reach/router'
import {ProductsPage} from './pages/Products/ProductsPage'
export const App=()=>{
    
    return(
        <div>
            <GlobalStyle/>
            <NavBar/>
            <Container>
                <Router>
                    <CategoriesPage path="/Categorias"/>
                    <ProductsPage path="/Productos"/>
                </Router>
            </Container>
        </div>
    );
}
