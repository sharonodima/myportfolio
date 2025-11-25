/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import portrait from '../Portrait.JPG';
import graduation from '../Graduation.jpg';
import citizenship from '../USCitizenship.jpg';
import '../custom.css';

function About() {
  const aboutItems = [
    {
      title: "From Kenya to Durham",
      image: portrait,
      text: (
        <>
          I was born and raised in Kenya, Africa and I have been in the states since January 2010. During this time, I have been a jack of all trades, as you can see on my{" "}
          <a
            href="/SharonOdimaEngineeringResume2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            resume
          </a>
          , dabbling in the travel industry as a flight attendant, in customer service, and in home health care as a certified nurse and home aide. I earned my associate degree in science from Durham Technical Community College. My favorite classes were anything math or statistics-related.
        </>
      ),
    },
    {
      title: "Engineering the Future",
      image: graduation,
      text: (
        <>
          I also attended a rigorous software engineering bootcamp for a year where I became proficient in JavaScript, HTML, CSS, and SQL. I built several single-page applications, worked with high-level frameworks like React, Redux, and Node, and even seeded databases with Knex. I'm excited to embark on a journey to become a full-fledged software engineer and put my skills to work!
        </>
      ),
    },
    {
      title: "Becoming an American Citizen",
      image: citizenship,
      text: (
        <>
          In 2020, I proudly became an American citizen after years of putting it off since arriving in the U.S. in 2010. Though I had been lackadaisical about the process, I eventually committed, studied hard for the civics test, and reflected on my journey here. Taking the oath of allegiance was an emotional moment that made me feel truly rooted in the country I now call home.
        </>
      ),
    },
  ];

  return (
    <div className="page-container about">
      <h1 className="projects-title gradient-text"
       style={{
            fontFamily: "Poppins",
            textShadow: `
              0 0 5px #facc15,
              0 0 10px #facc15,
              0 0 20px rgb(255, 25, 0),
              0 0 40px orange
            `
          }}>
        ABOUT ME
      </h1>

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center items-start">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="bg-[rgba(45,45,45,0.9)] rounded-lg shadow-lg p-5 text-center hover:scale-105 transition-transform flex flex-col w-full max-w-[450px] h-full"
            >
              <img
                src={item.image}
                alt={item.title}
                className="about-photo object-cover object-top h-[350px] w-full rounded"
              />
              <div className="flex flex-col flex-grow mt-3">
                <h2 className="gradient-text text-lg">{item.title}</h2>
                <p className="text-sm text-gray-300 mt-2">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;