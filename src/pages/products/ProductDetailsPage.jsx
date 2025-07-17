import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function ProductDetailsPage(){
    const {id} = useParams();
    const [product, setProduct] = useState('');

    useEffect(()=> {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.data)
        .then(data => setProduct(data))
        .catch(error => console.log(error))
    },[id])

    return(<>
        <div className="container my-5 p-md-5 p-3 shadow border-top border-info border-5 rounded">
            {/* {const {id, title, category, image, price, rating} = values} */}
            <div className="d-md-flex gap-3">
                <div className="text-center">
                    <img src={product.image} alt={product.title} style={{height:'300px', width:'300px', objectFit:'cover'}}/>
                </div>
                <div className="mt-3">
                    <h2>{product.title}</h2>
                    <p className="text-uppercase">Category: {product.category}</p>
                    <p>{product.description}</p>
                    <p><strong>$ {product.price}</strong></p>
                </div>
            </div>
            <hr />
            <div className="mt-3 text-center">
                <Link to='/product'><button className="btn btn-primary">Back</button></Link>
            </div>
        </div>
    </>)
}