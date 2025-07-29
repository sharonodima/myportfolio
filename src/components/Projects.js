/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import project2 from "../Project2.jpeg"
import project3 from "../Project3.jpeg"
import './Theme.css';

function Projects() {
  return (
    <div className="page-container projects">
      <header className="header-container">
        <div className="header"></div>
      </header>
      <h1 className="projects-title gradient-text">MY PROJECTS</h1>
      <div className="projects-container">

        {/* Project 1 */}
        <div className="project-box">
          <h2 className="gradient-text">Project 1</h2>
          <h3 className="gradient-text">Store Front</h3>
          <a
            href="https://sharonodima.github.io/HTML-CSS-Responsive-Practice/"
            target="_blank"
            rel="noopener noreferrer"
          >
           <img
              src={project2}
              alt="Project 1 Photo"
              className="project-photo reduced-size"
           />

          </a>
          <p>
            Created a Single Page Application with HTML, CSS, and JavaScript to
            showcase responsive design elements and executed responsive layouts
            by leveraging media queries to facilitate mobile viewing and
            enhance accessibility by 100%. I then increased accessibility by
            100% by utilizing scalable units for font size and making sure
            content is available to assistive devices.
          </p>
        </div>

                {/* Project 1 */}
        <div className="project-box">
          <h3 className="gradient-text">Project 1</h3>
          <h3 className="gradient-text">Responsive Design</h3>
          <a
            href="https://sharonodima.github.io/HTML-CSS-Responsive-Practice/"
            target="_blank"
            rel="noopener noreferrer"
          >
           <img
              src={project2}
              alt="Project 1 Photo"
              className="project-photo reduced-size"
           />

          </a>
          <p>
            I built a responsive Instagram-style social media application using Next.js, leveraging Server-Side Rendering (SSR) and Static Site Generation (SSG) for better performance and SEO. I designed reusable React components and a clean interface with TypeScript and Tailwind CSS. I then implemented secure authentication with JSON Web Tokens (JWT) and password hashing using bcrypt.js, storing user and post data in MongoDB with custom backend routes for registration, login, and post management. Finally, I deployed the app to Vercel with a CI/CD pipeline and used Faker.js to generate mock data for development, maintaining version control with Git and GitHub.
          </p>
        </div>

        {/* Project 2 */}
        <div className="project-box">
          <h3 className="gradient-text">Project 2</h3>
          <h3 className="gradient-text">JSON Web Tokens</h3>
          <a
            href="https://sharon-odima-react-website.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
             <img
              src={project3}
              alt="Project 2 Photo"
              className="project-photo reduced-size"
            />
          </a>
          <p>
            Led a team of 4 students in building an API with authentication and
            authorization by JSON Web Tokens using Node.js, Express, and Knex.
            Employed database access and middleware functions to improve API
            functionality, hence allowing performance of CRUD operations on
            them. I then created a hashed password using bcryptjs to ensure
            password security.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
