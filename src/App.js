import React from 'react';
import {NavBar} from './components/NavBar'
import {GlobalStyle,Container} from './styles/GlobalStyles'
import {CategoriesPage} from './pages/CategoriesPage/CategoriesPage'
export const App=()=>{
    
    return(
        <div>
            <GlobalStyle/>
            <NavBar/>
            <Container>
                <CategoriesPage/>
            </Container>
        </div>
    );
}
