import React from 'react';
import { Ull } from './styles.js';
import { Link } from '@reach/router';

export const SubMenu = ({ ShowItem, Items }) => {
    return (
        <Ull show={ShowItem}>
            {Items.map((Item, index) => {
                return (
                    <li key={index}>
                        <Link to={Item.Name}>
                            {Item.Icon}
                            {Item.Name}
                        </Link>
                    </li>
                );
            })}
        </Ull>
    );
};
