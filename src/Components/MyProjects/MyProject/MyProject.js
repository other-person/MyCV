import React from 'react';
import s from './MyProjectItem.module.css';

export const MyProjectItem = (props) => {
    return (
        <div className={s.item}>
            <div className={s.imgContainer}>
                <button className={s.button}>See</button>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};
