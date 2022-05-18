import React from 'react';
import s from "./Main.module.css"
import sContainer from "../../common/styles/Container.module.css"


export const Main = () => {
    return (
        <div className={s.main}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <span>Hello!</span>
                    <h1 >Im Taras Bazhenka</h1>
                    <span>Im Front-end developer</span>
                </div>
                <div className={s.myPhoto}>
                    <img src="#" alt="Avatar"/>
                </div>
            </div>
        </div>
    );
};

