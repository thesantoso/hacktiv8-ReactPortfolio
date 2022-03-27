import React, { Component } from 'react';
import classes from './Skills.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { DiJavascript1 } from 'react-icons/di';
import { DiLaravel } from 'react-icons/di';
import { DiMaterializecss } from 'react-icons/di';
import { blue, orange, yellow } from '@material-ui/core/colors';

// export default function AlignItemsList() {
//   return (
class Skills extends Component {
render() {          
  return (
    <div className={classes.box} id="skills">
    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginLeft: 5}}>
      {/* <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}> */}
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: yellow[500], color: blue[900] }}>
            <DiJavascript1 />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="FrontEnd Web Development" secondary="Javascript, Vue.js, React" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: orange[500], color: blue[900] }}> 
            <DiLaravel />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="BackEnd Web Development" secondary="Laravel, PHP" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[700] }}>
            <DiMaterializecss />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="UI/UX Designer" secondary="Figma, Adobe XD" />
      </ListItem>
    </List>
    {/* </List> */}
    {/* </div> */}
    </ScrollAnimation>
    </div>
  );
}}
export default Skills;