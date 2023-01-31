import React, { useState, useEffect } from 'react';


export default function NewPost() {
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));


    return (
        <div>
            <h1>Welcome, write a new post!</h1>
            <form />
        </div>
    )
}