// src/components/About.js
import React from 'react';

const About = ({ bio, links }) => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bio || "Put the bio in here"}</p>
      <img alt="I made this" src="https://i.imgur.com/mV8PQxj.gif" />
    </div>
  );
};

export default About;
