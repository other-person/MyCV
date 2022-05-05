import React from 'react';
import s from "./Skills.module.css"
import sContainer from "../../common/styles/Container.module.css"
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skills}>
            <div className={sContainer.container + " " + sContainer.skillsContainer}>

                  <h2 className={s.title}>My skills</h2>

                    <div className={s.wrapper}>
                        <Skill title={"HTML5"} description = {"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores aut earum eum harum"}/>
                        <Skill title={"CSS3"} description = {"inventore ipsam itaque, minus, nobis officia officiis perferendis quaerat quidem quos, sequi tempore ut vitae. Ad?"}/>
                        <Skill title={"JavaScript"} description = {" inventore ipsam itaque, erferendis quaerat quidem quos, sequi tempore ut vitae. Ad?"}/>
                    </div>



            </div>
        </div>
    );
};

