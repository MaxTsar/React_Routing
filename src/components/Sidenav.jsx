import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidenav() {
    return (
        <aside>
            <ul>
                <li><NavLink to="/books/marketing">Маркетинг</NavLink></li>
                <li><NavLink to="/books/psychology">Психология</NavLink></li>
                <li><NavLink to="/books/business">Бизнес</NavLink></li>
            </ul>
        </aside>
    );
}