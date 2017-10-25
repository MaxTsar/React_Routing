import React from 'react';
import { NavLink } from 'react-router-dom'; 

export default function Toolbar() {
    return (
        <nav>
            <h1 className="title"><NavLink to="/"><span>TOP</span>BOOK</NavLink></h1>
            <menu className="toolbar" type="toolbar">
                <li><NavLink exact to="/" className="link">Главная</NavLink></li>
                <li><NavLink to="/about" className="link">О нас</NavLink></li>
                <li><NavLink to="/books" className="link">Книги</NavLink></li>
            </menu>
        </nav>
    );
}