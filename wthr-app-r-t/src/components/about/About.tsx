import './About.css';
import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      made by: <strong>B1K3R4nt3nd</strong>
      <br />
      <Link to="" className="btn btn-secondary">
        Főoldal
      </Link>
    </div>
  );
}

export default About;
