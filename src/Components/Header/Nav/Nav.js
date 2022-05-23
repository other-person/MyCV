import React from 'react';
import s from "./Nav.module.sass"

 export const Nav = () => {
    return (
        <div className={s.wrapper}>
            <nav className={s.navigation}>
                <a href="#main">Main</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contacts">Contacts</a>
            </nav>
        </div>
    );
};
