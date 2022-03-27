import React, { Component } from 'react'
import classes from './Home.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Home extends Component {
    render() {
        return (
            <div className={classes.box} id="home">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.Home}>
                        <p> My name is <b>Rizky Dwi Santoso</b> and I am currently working as Software Developer Engineer at <a target="_blank" href="https://www.springworks.in/"><b>Springworks</b></a>. I completed my degree in Bachelor of Technology in Computer Science and Engineering from Sant Longowal Institute of Engineering and Technology. I am much interested in developing new things which excite me a lot. :)  </p>
                        <p className={classes.br}>I love exploring new technologies and being a practitioner, I like to stay on top of latest trends. I try to leave every line of code I write more readable, accessible, and modular.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default Home;