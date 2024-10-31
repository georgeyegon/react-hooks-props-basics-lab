// src/components/Links.js
import React from 'react';

const Links = ({ links }) => {
  return (
    <div>
      <h3>Links</h3>
      <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  );
};

export default Links;
