import React from 'react';
import {NavBar} from './components/NavBar'
import {GlobalStyle} from './styles/GlobalStyles'
import {CategoriesPage} from './pages/CategoriesPage/CategoriesPage'
export const App=()=>{
    
    return(
        <div>
            <GlobalStyle/>
            <NavBar/>
            <CategoriesPage/>
        </div>
    );
}
