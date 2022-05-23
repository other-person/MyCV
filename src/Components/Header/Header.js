import React from 'react';
import s from "./Header.module.sass"
import {Nav} from "./Nav/Nav";

export const Header = () => {
    return (
        <div className={s.header} id = "home">
            <div className={s.wrapper}>
                <Nav/>
            </div>
        </div>
    );
};



