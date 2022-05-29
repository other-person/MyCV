import React from 'react';
import s from "./Skill.module.sass"

export const Skill = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.wrapper}>

                <div className={s.icon} style={props.style}></div>
                <h3 className={s.title}>{props.title}</h3>
            </div>
            <div>
                <SkillLine width={props.width} percent={props.percent}/>
            </div>
        </div>
    );
};
const SkillLine = (props) => {
    return (
        <div className={s.wrapperSkillLine}>
            <div className={s.skillLine} style={props.width}></div>

        </div>

    )
}

