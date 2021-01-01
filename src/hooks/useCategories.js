import React, { useState, useEffect } from 'react';
import { URL_API } from '../../VariablesEntorno';
import axios from 'axios';

export default function useCategories() {
    const [objCategories, SetObjCategories] = useState([]);
    const [Update, SetUpdateCategories] = useState(false);
    const [objCategoriesRange, SetObjCategoriesRange] = useState([]);
    const [objCategoriesMinMaxRange, SetObjCategoriesMinMaxRange] = useState({
        Min: 0,
        Max: 10
    });
    //Set update all Categories
    const SetCategories = (blnUpdate) => {
        SetUpdateCategories(blnUpdate);
    };
    //Set update Categores limit 10
    const SetCategoriesRange = ({ Min, Max }) => {
        SetObjCategoriesMinMaxRange({
            Min,
            Max
        });
    };
    //Get all Categories
    useEffect(async () => {
        const ObjResponse = await axios.get(`${URL_API}/categories`);
        SetObjCategories(ObjResponse.data.Result.Categories);
        SetUpdateCategories(false);
    }, [Update]);
    //Get range Categories limit 10
    useEffect(async () => {
        const ObjResponse = await axios.post(
            `${URL_API}/categories/pagination`,
            objCategoriesMinMaxRange
        );
        SetObjCategoriesRange(ObjResponse.data.Result.Categories);
    }, [objCategoriesMinMaxRange]);

    return { objCategories, SetCategories, objCategoriesRange, SetCategoriesRange };
}
