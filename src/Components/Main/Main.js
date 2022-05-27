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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aspernatur assumenda
                            atque autem cupiditate deserunt eaque,
                            et fugit in minus, nostrum officiis optio perspiciatis quia quo recusandae reprehenderit
                            sint. et fugit in minus, nostrum officiis
                            optio perspiciatis quia quo recusandae reprehenderit sint et fugit in minus, nostrum
                            officiis optio perspiciatis quia quo recusandae
                            reprehenderit sint</p>
                    </div>
                </div>
                <div  className={s.myPhoto}>
                    <img src={avatarImage} alt="avatarka" width ="100%" />
                </div>
            </div>
        </div>
    );
};

