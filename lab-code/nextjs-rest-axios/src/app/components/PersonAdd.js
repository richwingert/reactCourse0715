"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function PersonAdd(props) {

    let [name, setName] = useState('');

    const handleChange = event => {
        setName(event.target.value );
    }
    const handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: name
        };
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res); console.log(res.data);
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Person Name:
                    <input type="text" name="name" onChange={handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    )

}
