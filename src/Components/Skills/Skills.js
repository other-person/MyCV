import React from 'react';
import s from './Skills.module.sass'
import sContainer from '../../common/styles/Container.module.sass'
import {Skill, SkillLine} from './Skill/Skill';
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
                    <Skill style={html} title={"HTML5"} width={{width: "90%"}}/>
                    <Skill style={css} title={"CSS3"} width={{width: "75%"}}/>
                    <Skill style={sass} title={"Sass"} width={{width: "75%"}}/>
                    <Skill style={js} title={"JavaScript"} width={{width: "65%"}}/>
                    <Skill style={react} title={"React"} width={{width: "75%"}}/>
                    <Skill style={redux} title={"Redux"} width={{width: "75%"}}/>
                    <Skill style={git} title={"Git"} width={{width: "75%"}}/>
                    <Skill style={github} title={"GitHub"} width={{width: "80%"}}/>
                    <Skill style={jira} title={"Jira"} width={{width: "85%"}}/>
                </div>

            </div>
        </div>
    );
};

