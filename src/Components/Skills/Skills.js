import React from 'react';
import s from "./Skills.module.css"
import sContainer from "../../common/styles/Container.module.css"

export const Skills = () => {
    return (
        <div className={s.skills}>
            <div className={sContainer.container + " " + sContainer.skillsContainer}>

                    <h2 className={s.title}>My skills</h2>

                    <div className={s.wrapper}>

                    </div>



            </div>
        </div>
    );
};

