import React from 'react';
import s from './MyProjects.module.css'
import {MyProjectItem} from './MyProject/MyProject';
import sContainer from '../../common/styles/Container.module.css'
import {Title} from '../Title/Title';
import socialImage from './../../Assets/Image/socialNetwork.jpg'
import todolistImage from './../../Assets/Image/todolist.png'
import calculatorImage from './../../Assets/Image/calculator.jpg'
import gearsImage from '../../Assets/Image/gears.jpg'

export const MyProjects = () => {

    const social = {
        backgroundImage: `url(${socialImage})`
    };
    const todolist = {
        backgroundImage: `url(${todolistImage})`
    };
    const calculator = {
        backgroundImage: `url(${calculatorImage})`
    };
    const gears = {
        backgroundImage: `url(${gearsImage})`
    }

    return (
        <div className={s.myProjects} id = "projects">
            <div className={sContainer.container + " " + sContainer.myProjectContainer}>

                <Title text={"My projects"}/>

                <div className={s.wrapper}>

                    <MyProjectItem style={social} title={"SocialNetwork"}
                                   description={" Hello my friends ,Hello my friends ,Hello my friends ,Hello my friends ,Hello my friends , "}/>
                    <MyProjectItem style={todolist} title={"Todolist"}
                                   description={" Hello my friends ,Hello my friends ,Hello my friends  "}/>
                    <MyProjectItem style={calculator} title={"Calculator"}
                                   description={" Hello my friends ,Hello ds nds ,Hello my friends ,Hello my friends nds ,Hello my friends ,Hello my friends nds ,Hello my friends ,Hello my friends nds ,Hello my friends ,Hello my friends  "}/>
                    <MyProjectItem style={gears} title={"Gear.by"}
                                   description={" Hello my friends ,Hello ds nds ,Hello my friends ,Hello my friends nds ,Hello my friends ,Hello my friends nds ,Hello my friends ,Hello my friends nds ,Hello my friends ,Hello my friends  "}/>
                </div>

            </div>
        </div>
    );
};


