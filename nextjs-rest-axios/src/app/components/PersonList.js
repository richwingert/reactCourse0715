"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';


function PersonList(props) {
 
    let [persons, setPersons] = useState([]);

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`https://jsonplaceholder.typicode.com/users`)
                //.then(data => {

                setPersons(result.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);


    return (
        <ul>
            {   persons.map(person =>
                    <li key={person.id}>{person.name}</li>
                )
            }
        </ul>
    )

}

export default PersonList;