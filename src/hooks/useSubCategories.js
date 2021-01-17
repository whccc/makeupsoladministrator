import { useEffect, useState } from 'react';
import axios from 'axios';
import { URL_API } from '../../VariablesEntorno';

export default function useSubCategories(StrIdCategory) {
    const [objSubCategories, SetObjSubCategories] = useState([]);
    const [objSubCtgories, setObjSubCtgories] = useState([]);
    const [Update, SetUpdateHook] = useState(false);
    //SetUpdate
    const SetUpdate = (blnState) => {
        SetUpdateHook(blnState);
    };
    //Get subcategories by category id
    useEffect(() => {
        const InitialData = async () => {
            const obj = await axios.get(`${URL_API}/subcategories/${StrIdCategory}`);
            SetObjSubCategories(obj.data.Result);
            SetUpdateHook(false);
        };
        //Initial Data
        InitialData();
    }, [Update]);

    //Update Sub Category
    const UpdateSubCategory = async ({ _id, strName }) => {
        const Result = await axios.put(`${URL_API}/subcategories`, { _id, strName });
        return Result.data.Success;
    };

    //const Get sub category
    const GetSubCategory = async (StrIdCategory) => {
        const obj = await axios.get(`${URL_API}/subcategories/${StrIdCategory}`);
        setObjSubCtgories(obj.data.Result);
    };
    return { objSubCategories, UpdateSubCategory, SetUpdate, GetSubCategory, objSubCtgories };
}
