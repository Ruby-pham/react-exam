import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function AddProduct() {
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");
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

    const submit = () => {
        let product = {
            title: title,
            price: price,
            description: description
        }
        console.log(product);
        axios.post("http://localhost:3000/products", product).then(() => {
            alert("added success");

        })
    }
    const back=()=>{
        navigate("/");
    }
    return (
        <>
            <h1>Add New Product</h1>
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
            <button onClick={() => {
                back()
            }}>back
            </button>
        </>
    );
}
