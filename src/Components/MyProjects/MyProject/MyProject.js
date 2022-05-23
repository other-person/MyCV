import React from 'react';
import s from './MyProjectItem.module.sass';
import buttonForProjects from './../../../Assets/Icons/IconButtons.png'

export const MyProjectItem = (props) => {
    return (
        <div className={s.item}>
            <div style={props.style} className={s.imgContainer}>

                <button className={s.buttonProject}>
                    <img src={buttonForProjects} alt=""/>
                </button>

            </div>
            <div className={s.text}>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>

        </div>
    );
};
