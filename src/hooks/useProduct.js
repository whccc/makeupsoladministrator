import axios from 'axios';
import { useEffect, useState } from 'react';
import { URL_API } from '../../VariablesEntorno';

const useProduct = () => {
    const [objProducts, setObjProducts] = useState([]);

    const GetProducts = async () => {
        const Result = await axios.get(`${URL_API}/product`);
        setUpdateDataProduct(false);
        setObjProducts(Result.data);
    };

    const CreateProduct = async (ObjDataProduct) => {
        const Result = await axios.post(`${URL_API}/product`, ObjDataProduct);
        return Result.data;
    };

    const GetProductsTenPagination = async ({ Min, Max }) => {
        const Result = await axios.post(`${URL_API}/product/Limit`, { Min, Max });
        setObjProducts(Result.data.Products);
        return Result.data.Count;
    };

    const SearchProduct = async (strText) => {
        const Result = await axios.post(`${URL_API}/product/filter`, { strText });
        setObjProducts(Result.data.Products);
    };

    const DeleteProduct = async (objProductDelete) => {
        const Result = await axios.delete(`${URL_API}/product`, { data: { ...objProductDelete } });
        return Result;
    };

    const EditProduct = async (objProductEdit) => {
        const Result = await axios.put(`${URL_API}/product`, { ...objProductEdit });
        return Result;
    };

    return {
        CreateProduct,
        objProducts,
        GetProductsTenPagination,
        GetProducts,
        SearchProduct,
        DeleteProduct,
        EditProduct
    };
};

export default useProduct;
