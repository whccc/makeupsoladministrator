import React from 'react';
import { Section } from './styles';
import { Categories } from '../../components/Categories';
import { SubCategories } from '../../components/SubCategories';
import { StateLogin } from '../../hooks/useUser';
//Validate Login

export const CategoriesPage = () => {
    if (!StateLogin()) {
        window.location = '/Login';
    }
    return (
        <Section>
            <Categories />
            <SubCategories />
        </Section>
    );
};
