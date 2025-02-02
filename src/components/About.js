import React from 'react';
import portrait from '../Portrait.JPG'
import graduation from '../Graduation.jpg';
import "./Theme.css"

function About() {
  return (
    <div className="page-container about">
      <h2>About Me</h2>
      
      <div className="about-content">
        {/* First Container: Image + First Paragraph */}
        <div className="about-section">
          <img 
            src={portrait}
            alt="Portrait" 
            className="about-photo"
          />
          <p>
            I was born and raised in Kenya, Africa and I have been in the states since January 2010. During this time, I have been a jack of all trades, as you can see on my 
            <a 
              href="assets/Sharon Odima Engineering Resume 2025.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="resume-link"
            >
              resume
            </a>, 
            dabbling in the travel industry as a flight attendant in customer service and in home health care both as a certified nurse and a home aide. I attended Durham Technical Community College here in Durham, NC where I earned my associates degree in science. My favorite classes were anything to do with math or statistics.
          </p>
        </div>

        {/* Second Container: Image + Second Paragraph */}
        <div className="about-section">
          <img 
            src={graduation} 
            alt="Another Portrait" 
            className="about-photo"
          />
          <p>
            I also attended a rigorous software engineering bootcamp for a whole year where I became proficient in Javascript, HTML, CSS, and SQL among other programming skills. I was able to build several Single page applications, work with high-level frameworks such as React, Redux, and Node, and even seed a database using Knex. I am very excited to be embarking on this rigorous journey to become a fully certified software engineer and I cannot wait to get into the job industry and actually put my skills to work.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
