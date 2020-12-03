import React from 'react';
import {Nav,Container} from './styles';
import { FiAlignJustify } from "react-icons/fi";
import {Navigation} from '../Navigation'
import { Fragment } from 'react';
import { useState } from 'react';


export const NavBar=()=>{
    const [ShowNavigation,SetShowNavigation]=useState(false);

    const Show=()=>{
        SetShowNavigation(!ShowNavigation);
    }
    return (
        <Fragment>
        <Nav>
            <Container>
                <FiAlignJustify
                onClick={Show}
                />
            </Container>
            <Container>
                <span>MakeupSol</span>
            </Container>
            <Container>
                <span>Cerrar Sesion</span>
            </Container>
        </Nav>
        <Navigation
            showNavigation={ShowNavigation}
        />
        </Fragment>
    );
}