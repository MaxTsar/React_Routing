import React from 'react';

export default function Book(props) {
    return (
        <div className="book">
            <div className="book-about">
                <h5>{props.title}</h5>
                <p>Автор: {props.author}</p>
                <p>Год выпуска: {props.year}</p>
            </div>
            <img src={`./img/${props.img}`} alt={props.title}/>
        </div>
    );
}