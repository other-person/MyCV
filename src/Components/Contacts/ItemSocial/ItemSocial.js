import React from 'react';
import s from './ItemSocial.module.sass'
import facebookImage from './../../../Assets/IconsForItemSocial/facebook .png'
import instagramImage from './../../../Assets/IconsForItemSocial/instagram.png'
import linkedinImage from './../../../Assets/IconsForItemSocial/linkedin.png'
import skypeImage from './../../../Assets/IconsForItemSocial/skype.png'
import vkImage from './../../../Assets/IconsForItemSocial/vkontakte.png'


export const ItemSocial = () => {

    const facebookImg = {
        backgroundImage: `url(${facebookImage})`
    };
    const instagramImg = {
        backgroundImage: `url(${instagramImage})`
    };
    const linkedinImg = {
        backgroundImage: `url(${linkedinImage})`
    };
    const skypeImg = {
        backgroundImage: `url(${skypeImage})`
    };
    const vkImg = {
        backgroundImage: `url(${vkImage})`
    };


    return (
        <div className={s.wrapperSocial}>

            <a style={facebookImg} className={s.itemSocialNetwork} href="https://www.facebook.com/ " target="_blank">

            </a>
            <a style={instagramImg} className={s.itemSocialNetwork} href="https://www.instagram.com/" target="_blank">

            </a>
            <a style={linkedinImg} className={s.itemSocialNetwork}
               href="https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit" target="_blank">

            </a>
            <a style={skypeImg} className={s.itemSocialNetwork} href="#" target="_blank">

            </a>
            <a style={vkImg} className={s.itemSocialNetwork} href="https://vk.com/ " target="_blank">

            </a>

        </div>
    )
}