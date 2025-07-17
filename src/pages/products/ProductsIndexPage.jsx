import { useEffect, useState } from "react";
import ProductsUI from "./ProductsUI";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function ProductsIndexPage(){

    
    const [products, setProducts] = useState();
    const url = "https://fakestoreapi.com/products";
    const navigate = useNavigate();
    

    useEffect(()=>{

        fetchProducts();

    },[])


    const fetchProducts = async () => {
    axios
        .get(url)
        .then((response) => response.data)
        .then(data => setProducts(data))
        .catch((error) => console.log(error));
    };


    //DELETE PRODUCTS
    const handleDelete = (productID) => {
        const delelteItem = products.filter((products)=> {
            return products.id !== productID
        })
        setProducts(delelteItem);
    }

    //VIEW PRODUCTS
    const handleView = (productID) => {
        navigate(`/product/${productID}`);
    }

    

    return(<>
        <ProductsUI 
            products={products} 
            handleDelete = {handleDelete}
            handleView = {handleView}
        />
    </>)
}