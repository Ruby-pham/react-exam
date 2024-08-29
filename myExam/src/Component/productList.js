import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { MdMovieEdit } from "react-icons/md";

export function ProductList() {
    const [products, setProducts] = useState([]);

    const getList = () => {
        axios.get("http://localhost:3000/products").then((res) => {
            setProducts(res.data);
        });
    };

    useEffect(() => {
        getList();
    }, []);

    const remove = (id) => {
        if (window.confirm("Are you sure?")) {
            axios.delete(`http://localhost:3000/products/${id}`).then(() => {
                alert("Deleted");
                getList();
            });
        }
    };

    return (
        <>
            <h1>Product List</h1>
            <Link className='link' to="addProduct">
                <button className='addNewUser'>Add New Product</button>
            </Link>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th colSpan={2}>Action</th>
                </tr>
                </thead>
                <tbody>
                {products.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                            <Link className='link' to={`/product/${item.id}`}>
                                {item.title}
                            </Link>
                        </td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td>
                            <button onClick={() => remove(item.id)}>
                                <FaTrashAlt />
                            </button>
                        </td>
                        <td>
                            <Link className='link' to={`/update/${item.id}`}>
                                <MdMovieEdit />
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}