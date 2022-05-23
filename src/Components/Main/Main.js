import React from 'react';
import s from "./Main.module.sass"
import sContainer from "../../common/styles/Container.module.sass"
import avatarImage from "./../../Assets/Avatarka/Avatarka.jpg"

export const Main = () => {

    const avatarImg = {
        backgroundImage: `url(${avatarImage})`
    };

    return (
        <div className={s.main} id = "main">
            <div className={sContainer.container}>
                <div className={s.text}>
                    <span>Hello!</span>
                    <h1 className={s.myName}>Im Taras Bazhenka</h1>
                    <span>Im Front-end developer</span>
                </div>
                <div style = {avatarImg} className={s.myPhoto}>
                </div>
            </div>
        </div>
    );
};

