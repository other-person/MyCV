import React from "react";
import s from './linksForFooter.module.sass'

export const FooterLinks = () => {
    return (
        <div className={s.wrapperLinks}>

            <a className={s.itemLink} href="https://www.facebook.com/ " target="_blank">Facebook</a>
            <a className={s.itemLink} href="https://www.instagram.com/" target="_blank">Instagram</a>
            <a className={s.itemLink} href="https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit" target="_blank">Linkedin</a>
            <a className={s.itemLink} href="https://vk.com/ " target="_blank">Vkontakte</a>

        </div>
    )
}