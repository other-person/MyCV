import React from 'react';
import s from "./Footer.module.css"
import {Item} from "../Contacts/Item/Item";
import {Title} from "../Title/Title";

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.wrapper}>

                <Title text={"Bazhenka Taras"}/>

                <div className={s.social}>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </div>
                {/*<span className={s.text}></span>*/}
            </div>

        </div>
    );
};

