import React from 'react';
import s from "./Item.module.sass"



export const ItemData = (props) => {
    return (
        <div className={s.itemData}>

            <div className={s.iconData}>

                <img src={props.icon} alt="Icon"/>

            </div>

            <div className={s.wrapperDesc}>
                <h3 className={s.titleDesc}>{props.titleDescription}</h3>
                <p className={s.description}>{props.description}</p>
            </div>

        </div>
    );
};

