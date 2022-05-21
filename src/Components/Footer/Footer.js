import React from 'react';
import s from "./Footer.module.css"
import {Title} from "../Title/Title";

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.wrapper}>

                <Title text={"Bazhenka Taras"}/>

                <div className={s.social}>
                    {/*<Item/>*/}
                    {/*<Item/>*/}
                    {/*<Item/>*/}
                    {/*<Item/>*/}
                </div>

                <a href="#home" className={s.buttonComeBack}>
                    <div className={s.textUp}>UP</div>
                </a>
            </div>
        </div>

)};

