import React, { useState } from 'react';
import { Nav } from './styles';
import { SubMenu } from '../NavigationSubMenu';
import PersonImg from '../../img/Person.png';
import Logo from '../../img/logo.jpeg';
import {
    FaProductHunt,
    FaBox,
    FaClone,
    FaAddressBook,
    FaAngleDown,
    FaAngleLeft
} from 'react-icons/fa';
import { Link } from '@reach/router';

const JsonSubMenu = {
    SubMenuProductos: [
        {
            Name: 'Productos',
            Icon: <FaBox />
        },
        {
            Name: 'Categorias',
            Icon: <FaClone />
        }
    ]
};
export const Navigation = ({ showNavigation }) => {
    const [ShowItem, SetShowItem] = useState({
        SubMenuProducto: false,
        SubMenua: false
    });
    //Mostrar Sub Menu
    const showSubMenu = (state) => {
        switch (state) {
            case 'Productos':
                SetShowItem({
                    SubMenuProducto: !ShowItem.SubMenuProducto
                });
                break;
        }
    };

    return (
        <Nav showNavigation={showNavigation}>
            <ul>
                <div>
                    <img src={Logo} />
                </div>
                <li>
                    <a
                        onClick={() => {
                            showSubMenu('Productos');
                        }}>
                        <FaProductHunt /> Gestion Productos{' '}
                        {ShowItem.SubMenuProducto ? <FaAngleDown /> : <FaAngleLeft />}
                    </a>
                    <SubMenu
                        ShowItem={ShowItem.SubMenuProducto}
                        Items={JsonSubMenu.SubMenuProductos}
                    />
                </li>

                <li>
                    <Link to="/Pedidos">
                        <FaAddressBook /> Pedidos
                    </Link>
                </li>
            </ul>
        </Nav>
    );
};
