import React, { useContext } from 'react';
import { Section } from './styles';
import { Categories } from '../../components/Categories';
import { SubCategories } from '../../components/SubCategories';
import { StateLogin } from '../../hooks/useUser';
import CategoryContext from '../../Context/CategoryContext';
import useCategories from '../../hooks/useCategories';
//Validate Login

export const CategoriesPage = () => {
    const { objCategories, SetCategories } = useCategories();
    if (!StateLogin()) {
        window.location = '/Login';
    }
    return (
        <Section>
            <CategoryContext.Provider
                value={{ objCategories, UpdateContextCategory: SetCategories }}>
                <Categories />
                <SubCategories />
            </CategoryContext.Provider>
        </Section>
    );
};
