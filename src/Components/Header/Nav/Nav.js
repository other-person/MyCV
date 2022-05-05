import React from 'react';
import s from "./Nav.module.css"

 export const Nav = () => {
    return (
        <div>
            <nav className={s.navigation}>
                <a href="#">Main</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <a href="#">Contacts</a>
            </nav>
        </div>
    );
};

