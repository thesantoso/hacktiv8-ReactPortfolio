import React, { Component } from 'react';
import classes from './Experience.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { FaTools } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { FiFigma } from 'react-icons/fi';
import { SiReact } from 'react-icons/si';
import { FaSchool } from 'react-icons/fa';

class Experience extends Component {
    render() {
        return (
            <div className={classes.box} id="experience">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>MY JOURNEY</span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >
                                                    <SiReact />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Bootcamp React & React Native FrontEnd Developer <span>Feb(2022)-Present</span></h2>
                                                    <p>I am currently Bootcamp as <b>FrontEnd React Developer</b> at <a target="_blank" href="https://www.hacktiv8.com/"><b>Hacktiv8</b></a> I'm Managing data in the Front End sphere using Redux includes implementing the Next.JS framework concept for server-side needs.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                    <FaTools />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >IT Support Engineer <span>Jan(2022)-Mar(2022)</span></h2>
                                                    <p>I've also been freelance for 3 months at <a href='https://www.aia-financial.co.id/'><b>AIA Indonesia</b></a> I'm Monitoring and Supporting for production servers and devices (e.g HP, Dell, Cisco, Mikrotik, Linksys)</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                    <FiFigma />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >UI/UX Designer<span>Aug(2021)-Dec(2021)</span></h2>
                                                    <p>Completed five month Virtual Internship in UI/UX Designer at <b>PT.Impactbyte Teknologi Edukasi (Skilvul)</b> I'm Create a mobile application design for the Jago Last Wish feature related to life insurance products for Bank Jago</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>

                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                    <FaTools />
                                                </div>
                                                <div className={classes.label}>
                                                     <h2 >IT Support Engineer <span>Aug(2021)-Dec(2021)</span></h2>
                                                    <p>I've also been freelance for 5 months at <b>PT. Asuransi Jiwa Generali Indonesia</b><a href='https://www.aia-financial.co.id/'></a> I'm Troubleshooting problematic computer systems or network components</p>
                                                </div>
                                                <div className={classes.timeline_entry_inner}><div className={classes.timeline_icon_3 || classes.color_none}></div></div>
                                            </article>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollAnimation>
            </div>

        )
    }
}

export default Experience;
