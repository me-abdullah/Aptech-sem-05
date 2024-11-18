import React from 'react';
import { Link } from 'react-router-dom';
function About() {
  return (
   <>
    <h1>About</h1>
  <Link to="/">Home</Link>
  <Link to="/About">About</Link>
  <Link to="/Services">Services</Link>
  <Link to="/Contact">Contact</Link>
  </>
   
  );
}

export default About;