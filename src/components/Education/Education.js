import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
// import { Timeline } from '@mui/lab';
// import { TimelineItem } from '@mui/lab';
// import { TimelineSeparator } from '@mui/lab';
// import { TimelineConnector } from '@mui/lab';
// import { TimelineContent } from '@mui/lab';
// import { TimelineOppositeContent } from '@mui/lab';
// import { TimelineDot } from '@mui/lab';
// import { FastfoodIcon } from '@mui/icons-material';
// import { LaptopMacIcon } from '@mui/icons-material';
// import { HotelIcon } from '@mui/icons-material';
// import { RepeatIcon } from '@mui/icons-material';
// import { Typography } from '@mui/material';
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Timeline } from '@material-ui/lab';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CodeIcon from '@mui/icons-material/Code';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SchoolIcon from '@mui/icons-material/School';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: '10px 16px',
//   },
//   secondaryTail: {
//     backgroundColor: theme.palette.secondary.main,
//   },
// }));

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 3,
            marginLeft: 25
        }}
    />
);

// export default function CustomizedTimeline() {
  // const classes = useStyles();
  class Education extends Component {
    render() {          
  return (
    <div className={classes.box} id="education">
        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={5.4} animateOnce={true} initiallyVisible={true}>
      <ColoredLine color="green" /><br>
      </br>
      <h1 className={classes.heading}>My Education</h1><br></br>
      <div className={classes.Education}>
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Aug 2018 - Present
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={5} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Gunadarma University
            </Typography>
            <Typography>Information System</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Jul 2015 - Jul 2018
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={5} className={classes.paper}>
            <Typography variant="h6" component="h1">
              SMKN 5 Kota Bekasi
            </Typography>
            <Typography>Software Engineering</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
    </ScrollAnimation><br>
    </br>
    {/* <ColoredLine color="blue" /> */}
    </div>
  );
  }}
export default Education;
