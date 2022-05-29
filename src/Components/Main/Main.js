import React from 'react';
import s from "./Main.module.sass"
import sContainer from "../../common/styles/Container.module.sass"
import avatarImage from "./../../Assets/Avatarka/Avatarka.jpg"

export const Main = () => {

    // const avatarImg = {
    //     backgroundImage: `url(${avatarImage})`
    // };

    return (
        <div className={s.main} id="main">
            <div className={sContainer.container}>
                <div className={s.text}>
                    <span>Hello!</span>
                    <h1 className={s.myName}>Im Taras Bazhenka</h1>
                    <span>Im Front-end developer</span>
                    <div className={s.mainDescription}>
                        <p>I am a result oriented frontend developer with experience in creating Landing Pages and SPA,
                            using React(JS/TS), Redux, HTML & CSS.
                            In spare time I solve katas on Codewars and Freecodecamps and boost my English. I am
                            interested in graphic and web design, loft design.
                            I would like to find a full-time job in a creative company with up-to-date task and
                            collaborative team!</p>
                    </div>
                </div>
                <div className={s.myPhoto}>
                    <img src={avatarImage} alt="avatarka" width="100%"/>
                </div>
            </div>
        </div>
    );
};

