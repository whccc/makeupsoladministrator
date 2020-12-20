import React from "react";
import { Section } from "./styles";
import { Categories } from "../../components/Categories";
import { SubCategories } from "../../components/SubCategories";

export const CategoriesPage = () => (
  <Section>
    <Categories />
    <SubCategories />
  </Section>
);
