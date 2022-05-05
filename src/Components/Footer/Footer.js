import React from 'react';
import s from "./Footer.module.css"
import {Item} from "../Contacts/Item/Item";

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.wrapper}>
                <h3 className={s.title}> Bazhenka Taras</h3>
                <div className={s.social}>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </div>
                <span className={s.text}></span>
            </div>

        </div>
    );
};

