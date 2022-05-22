import React from 'react';
import s from "./Contacts.module.css"
import sContainer from "../../common/styles/Container.module.css";
import {Title} from "../Title/Title";
import {ItemData} from "./Item/ItemData";
import iconeMail from "./../../Assets/MylocationIcons/email.png"
import iconLocation from "./../../Assets/MylocationIcons/location.png"
import iconCallme from "./../../Assets/MylocationIcons/callme.png"
import iconSocial from "./../../Assets/MylocationIcons/social.png"


export const Contacts = () => {

    return (
        <div className={s.contacts} id="contacts">

            <div className={sContainer.container + " " + sContainer.contactsContainer}>

                <Title text={"Contacts"}/>

                <div className={s.data}>

                    <ItemData  icon={iconLocation} titleDescription={"My address"} description={" Botanicheskaya 7A, Minsk, Belarus "}/>
                    <ItemData  icon={iconSocial} titleDescription={"Social profiles"}/>
                    <ItemData  icon={iconeMail} titleDescription={"Email me"} description={" Gmail: bazhenkataras@gmail.com"}/>
                    <ItemData  icon={iconCallme} titleDescription={"CallMe"} description={" +375298673579 "}/>

                </div>

                <form className={s.wrapper} action="">
                    <input placeholder="Your organization"/>
                    <input placeholder="Your number"/>
                    <textarea placeholder="Message" name="" id="" cols="50" rows="7"/>
                </form>

                <button className={s.button}>Send</button>
            </div>
        </div>
    );
};

