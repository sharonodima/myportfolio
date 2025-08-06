/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import project1 from "../Project1.jpeg";
import project2 from "../Project2.jpeg";
import project3 from "../Project3.jpeg";
import "../custom.css";

function Projects() {
  const projects = [
    {
      title: "Project 1",
      subtitle: "Store Front",
      img: project1,
      link: "https://sharonodima.github.io/HTML-CSS-Responsive-Practice/",
      desc: "Created a Single Page Application with HTML, CSS, and JavaScript to showcase responsive design elements and executed responsive layouts by leveraging media queries to facilitate mobile viewing. I enhanced accessibility in accordance with WCAG standards by using scalable font units and ensuring content was available to assistive technologies like screen readers.",
    },
    {
      title: "Project 2",
      subtitle: "Instagram Clone",
      img: project2,
      link: "https://sharonodimainstagram-clone.vercel.app",
      desc: "Built a responsive social media app using Next.js with SSR and SSG for performance and SEO. Developed reusable React components and a clean interface with TypeScript and Tailwind CSS. Implemented secure authentication with JWT and bcrypt.js, and stored user data in MongoDB. Deployed to Vercel and managed version control with Git and GitHub.",
    },
    {
      title: "Project 3",
      subtitle: "Nasa Space Portfolio",
      img: project3,
      link: "https://sharonodimaportfolio.vercel.app/",
      desc: "Designed and deployed a responsive personal portfolio using React, integrating NASA's APOD API to dynamically showcase space imagery. Employed reusable components and deployed the site with a CI/CD pipeline on Vercel. Focused on modern design, performance optimization, and WCAG-compliant accessibility standards.",
    },
  ];

  return (
    <div className="page-container projects">
      <header className="header-container">
        <div className="header"></div>
      </header>

      <h1 className="projects-title gradient-text glow" 
          style={{
            fontFamily: "Poppins",
            textShadow: `
              0 0 5px #facc15,
              0 0 10px #facc15,
              0 0 20px rgb(255, 25, 0),
              0 0 40px orange
            `
          }}>
        MY PROJECTS
      </h1>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full px-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-[rgba(45,45,45,0.9)] rounded-lg shadow-lg p-5 text-center hover:scale-105 transition-transform flex flex-col items-center w-[390px]"
            >
              <h2 className="gradient-text text-lg mb-1">{p.title}</h2>
              <h3 className="gradient-text text-base mb-3">{p.subtitle}</h3>

              <img
                src={p.img}
                alt={p.title}
                className="project-photo object-cover h-400 w-full rounded mb-3"
              />

              <p className="text-sm text-gray-300 flex-grow text-center">{p.desc}</p>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-blue-400 underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;