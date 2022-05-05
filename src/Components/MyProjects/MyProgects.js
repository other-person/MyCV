import React from 'react';
import s from "./MyProjects.module.css"
import {MyProjectItem} from "./MyProject/MyProject";
import sContainer from "../../common/styles/Container.module.css"

export const MyProjects = () => {
    return (
        <div className={s.myProjects}>
            <div className={sContainer.container + " " + sContainer.myProjectContainer}>

                <h2 className={s.title}>My projects</h2>

                <div className={s.wrapper}>
                    <MyProjectItem title={"Name project 1"}
                                   description={" Hello my friends ,Hello my friends ,Hello my friends ,Hello my friends ,Hello my friends , "}/>
                    <MyProjectItem title={"Name project 2"}
                                   description={" Hello my friends ,Hello my friends ,Hello my friends  "}/>
                    <MyProjectItem title={"Name project 3"}
                                   description={" Hello my friends ,Hello ds nds ,Hello my friends ,Hello my friends nds ,Hello my friends ,Hello my friends nds ,Hello my friends ,Hello my friends nds ,Hello my friends ,Hello my friends  "}/>
                </div>

            </div>
        </div>
    );
};


