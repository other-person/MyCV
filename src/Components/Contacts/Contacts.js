import React from 'react';
import s from "./Contacts.module.css"
import sContainer from "../../common/styles/Container.module.css";
import {Title} from "../Title/Title";
import {ItemData} from "./Item/ItemData";

export const Contacts = () => {
    return (
        <div className={s.contacts} id="contacts">

            <div className={sContainer.container + " " + sContainer.contactsContainer}>

                <Title text={"Contacts"}/>

                <div className={s.data}>

                    <ItemData icon={"1"} titleDescription={"My address"}description={" Botanicheskaya 7A, Minsk, Belarus "}/>
                    <ItemData icon={"1"} titleDescription={"Social profiles"}/>
                    <ItemData icon={"1"} titleDescription={"Email me"}description={" Gmail: bazhenkataras@gmail.com"}/>
                    <ItemData icon={"1"} titleDescription={"CallMe"}description={" +375298673579 "}/>

                </div>

                <form className={s.wrapper} action="">
                    <input placeholder="Your organization"/>
                    <input placeholder="Your number"/>
                    <textarea placeholder="Message" name="" id="" cols="50" rows="7"></textarea>
                </form>

                <button className={s.button}>Send</button>
            </div>
        </div>
    );
};

