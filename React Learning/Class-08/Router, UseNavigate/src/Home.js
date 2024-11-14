import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

const Navigate = useNavigate()


function goToAbout() {
    Navigate("/About")
}

  return (
  <>
  
  <h1>Home</h1>
  <Link to="/">Home</Link><br/>
  <button type='button' className='btn btn-success' onClick={goToAbout}>About Page</button>
  {/* <Link to="/About">About</Link>
  <Link to="/Services">Services</Link>
  <Link to="/Contact">Contact</Link> */}
  </>
    
  );
}

export default Home;