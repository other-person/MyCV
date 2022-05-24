import React from 'react';
import s from './Skills.module.sass'
import sContainer from '../../common/styles/Container.module.sass'
import {Skill} from './Skill/Skill';
import {Title} from '../Title/Title';
import htmlImage from './../../Assets/TechologyIcons/html.png'
import cssImage from './../../Assets/TechologyIcons/css.png'
import sassImage from './../../Assets/TechologyIcons/sass.png'
import jsImage from './../../Assets/TechologyIcons/js.png'
import reactImage from './../../Assets/TechologyIcons/react.png'
import reduxImage from './../../Assets/TechologyIcons/redux.png'
import gitImage from './../../Assets/TechologyIcons/git.png'
import githubImage from './../../Assets/TechologyIcons/github.png'
import jiraImage from './../../Assets/TechologyIcons/jira.png'

export const Skills = () => {

    const html = {
        backgroundImage: `url(${htmlImage})`
    };
    const css = {
        backgroundImage: `url(${cssImage})`
    };
    const sass = {
        backgroundImage: `url(${sassImage})`
    };
    const js = {
        backgroundImage: `url(${jsImage})`
    };
    const react = {
        backgroundImage: `url(${reactImage})`
    };
    const redux = {
        backgroundImage: `url(${reduxImage})`
    };
    const git = {
        backgroundImage: `url(${gitImage})`
    };
    const github = {
        backgroundImage: `url(${githubImage})`
    };
    const jira = {
        backgroundImage: `url(${jiraImage})`
    };

    return (
        <div className={s.skills} id="skills">

            <div className={sContainer.container + " " + sContainer.skillsContainer}>

                <Title text={"Skills"}/>

                <div className={s.wrapper}>
                    <Skill style={html} title={"HTML5"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores aut earum eum harum"}/>
                    <Skill style={css} title={"CSS3"}
                           description={"inventore ipsam itaque, minus, nobis officia officiis perferendis quaerat quidem quos, sequi tempore ut vitae. Ad?"}/>
                    <Skill style={sass} title={"Sass"}
                           description={" inventore ipsam itaque, erferendis quaerat quidem quos, sequi tempore ut vitae. Ad?"}/>
                    <Skill style={js} title={"JavaScript"}
                           description={" inventore ipsam itaque, erferendis quaerat quidem quos, sequi tempore ut vitae. Ad?"}/>
                    <Skill style={react} title={"React"}
                           description={" inventore ipsam itaque, erferendis quaerat quidem quos, sequi tempore ut vitae. Ad?"}/>
                    <Skill style={redux} title={"Redux"}
                           description={" inventore ipsam itaque, erferendis quaerat quidem quos, sequi tempore ut vitae. Ad?"}/>
                    <Skill style={git} title={"Git"}
                           description={" inventore ipsam itaque, erferendis quaerat quidem quos, sequi tempore ut vitae. Ad?"}/>
                    <Skill style={github} title={"GitHub"}
                           description={" inventore ipsam itaque, erferendis quaerat quidem quos, sequi tempore ut vitae. Ad?"}/>
                    <Skill style={jira} title={"Jira"}
                           description={" inventore ipsam itaque, erferendis quaerat quidem quos, sequi tempore ut vitae. Ad?"}/>
                </div>

            </div>
        </div>
    );
};

