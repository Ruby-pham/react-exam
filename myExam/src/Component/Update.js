import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function Update() {
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");
    const params = useParams();
    const idUpdate = params.id;

    const navigate = useNavigate();

    const changeTitle = (event) => {
        let dataInput = event.target.value;
        setTitle(dataInput);
    }
    const changePrice = (event) => {
        let dataInput = event.target.value;
        setPrice(dataInput);
    }
    const changeDescription = (event) => {
        let dataInput = event.target.value;
        setDescription(dataInput);
    }


    useEffect(() => {
        axios.get("http://localhost:3000/products/" + idUpdate).then((res) => {
            let data = res.data;
            setTitle(data.title);
            setPrice(data.price);
            setDescription(data.description);
        })
    }, [])

    const submit = () => {
        let product = {
            title: title,
            price: price,
            description: description
        }
        console.log(product);
        axios.put(`http://localhost:3000/products/${idUpdate}`, product).then(() => {
            alert("Update Success");
            navigate("/");
        })
    }
    return (
        <>
            <h1>Update Product</h1>
            <label>Title :</label><br/>
            <input value={title} placeholder="title" onChange={(event) => {
                changeTitle(event)
            }}/><br/>
            <label>price :</label><br/>
            <input value={price} placeholder="price" onChange={(event) => {
                changePrice(event)
            }}/><br/>
            <label>description :</label><br/>
            <input value={description} placeholder="description" onChange={(event) => {
                changeDescription(event)
            }}/><br/>
            <button onClick={() => {
                submit()
            }}>Submit
            </button>
        </>
    );
}

export default Update;