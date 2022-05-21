import React from 'react';
import s from "./Skill.module.css"

export const Skill = (props) => {
    return (
        <div className={s.skill}>

            <div className={s.icon} style={props.style}></div>
            <h3 className={s.title}>{props.title}</h3>

            <span className={s.discription}>{props.description}</span>
        </div>
    );
};

