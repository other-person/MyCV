import React from 'react';
import s from "./Title.module.sass"

export const Title = (props) => {
    return (
        <div>
            <h2 className={s.title}>{props.text}</h2>
            <div className={s.underline}></div>
        </div>
    )
}