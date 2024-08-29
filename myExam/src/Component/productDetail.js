import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate(); // Hook to programmatically navigate

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`).then((res) => {
            setProduct(res.data);
        });
    }, [id]);

    const goBack = () => {
        navigate('/');
    };

    if (!product) return <p>Loading...</p>;

    return (
        <div className='detailProduct-container'>
            <h1>Product Details</h1>
            <p><strong>ID:</strong> {product.id}</p>
            <p><strong>Title:</strong> {product.title}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Price:</strong> {product.price}</p>
            <button onClick={goBack}>Back</button>
        </div>
    );
}

export default ProductDetails;