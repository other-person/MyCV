import React from 'react';
import s from "./Item.module.css"


export const ItemData = (props) => {
    return (
        <div className={s.itemData}>

            <div className={s.iconData}>
                    {props.icon}
            </div>

            <div className={s.wrapperDesc}>
                <h3 className={s.titleDesc}>{props.titleDescription}</h3>
                <p className={s.description}>{props.description}</p>
            </div>

        </div>
    );
};

