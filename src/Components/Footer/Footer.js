import React from "react";
import {FooterLinks} from './Links/linksForFooter'
import sContainer from "../../common/styles/Container.module.sass";
import {Title} from './../Title/Title'
import s from './../Footer/Footer.module.sass'
import ArrowUp from './../../Assets/IconButtonUp/up.png'

export const Footer = () => {

    const arrowUp = {
        backgroundImage: `url(${ArrowUp})`
    };

    return (
        <div className={sContainer.container + " " + sContainer.footerContainer}>

            <Title text={"Taras Bazhenka"}/>

            <div><FooterLinks/></div>

            <a  style = {arrowUp} href="#home" className={s.buttonComeBack}>
                {/*<div className={s.textUp}></div>*/}
            </a>

            <div className={s.footerText}>&#169; 2022 Tarik&Co, All Rights Reserved.</div>
        </div>
    )
}