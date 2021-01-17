import React, { useState, Fragment } from 'react';
import { Nav, Container } from './styles';
import { FiAlignJustify } from 'react-icons/fi';
import { Navigation } from '../Navigation';
import { DeleteUserLogin } from '../../hooks/useUser';
import Logo from '../../img/Logo.jpeg';

const LogOut = () => {
    DeleteUserLogin();
};

export const NavBar = () => {
    const [ShowNavigation, SetShowNavigation] = useState(false);

    const Show = () => {
        SetShowNavigation(!ShowNavigation);
    };
    return (
        <Fragment>
            <Nav>
                <Container>
                    <FiAlignJustify onClick={Show} />
                </Container>
                <Container></Container>
                <Container>
                    <span
                        onClick={() => {
                            LogOut();
                        }}>
                        Cerrar Sesion
                    </span>
                </Container>
            </Nav>
            <Navigation showNavigation={ShowNavigation} />
        </Fragment>
    );
};
