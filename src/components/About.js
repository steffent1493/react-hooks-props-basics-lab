import React from "react";
import Links from "./Links";


function About(props) {
  const gotBio = props.user.bio
  if (gotBio) {
  return (
  <div id="about">
      <h2>About Me</h2>
      <p>{props.user.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links githublink={props.user.links.github} linkedinlink={props.user.links.linkedin}/>
    </div>)

  }
    return (
    <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links githublink={props.user.links.github} linkedinlink={props.user.links.linkedin}/>
    </div>
    )
}

export default About;
