import React from 'react';
import s from "./Contacts.module.css"
import sContainer from "../../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={sContainer.container + " " + sContainer.contactsContainer}>
                <h2 className={s.title}>Contacts</h2>

                    <form className={s.wrapper} action="">
                        <input placeholder="<input>"/>
                        <input placeholder="<input>"/>
                        <textarea placeholder="<textarea>" name="" id="" cols="50" rows="7"></textarea>
                    </form>

                <button className={s.button}>Send</button>
            </div>
        </div>
    );
};

