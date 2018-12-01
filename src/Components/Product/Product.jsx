import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Product(props) {
    let item = props.item;
    let { name, price, image_url, product_id } = props.item;
    let deleteItem = () => {
        let promise = axios.delete('/api/inventory/' + product_id);
        promise.then(res => {
            props.cb();
        })
    }

    return (
        <div className="Product">
            <span>{name} </span>
            <span>${price} </span>
            <img src={image_url} alt={name} />
            <button onClick={() => deleteItem()}>Delete</button>
            <Link to='/edit' className='links'>
                <button onClick={() => props.select(item)}>Edit</button>
            </Link>
        </div >
    )

}

export default Product;