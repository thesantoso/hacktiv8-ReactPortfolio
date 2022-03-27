import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 3,
            marginLeft: 40,
            // marginRight: 20 
        }}
    />
);
class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                    {/* <span className={classes.head}>ABOUT ME</span> */}
                    <h2 className={classes.heading}>HI, Rizky Here</h2>
                    <div className={classes.About}>
                        <p> Hi! I am <b>Rizky Dwi Santoso</b>, a web developer focused on crafting web. Designing and Coding have been my passion since the days I started study with computers but I found myself into web development since 2016. I enjoy creating beautifully designed, intuitive and functional websites.</p>
                        <p className={classes.br}>I am currently studying Computer Science at Gunadarma University , with a focus in Web Development. Last year, I was on a 6 month internship at Skilvul as a UI/UX Designer.
                        I'm into machine learning, human-computer interactions and Back End development. In my free time, I drink coffee and play video games just for fun.
                        </p>
                    </div>
                </ScrollAnimation>
                <ColoredLine color="yellow" />
            </div>
        )
    }
}

export default About;