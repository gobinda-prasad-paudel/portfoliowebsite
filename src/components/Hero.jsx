import React from "react";
import image from "../images/photo1_cropped.jpg"; // Corrected path for the image\
import cv from "../docs/cv(resume).pdf"; // Corrected path for the image\

const Hero = () => {
  return (
    <>
      <section className="main-sec">
        <div className="item1">
          <h5>Welcome</h5>
          <h1 className="main-h1">
            I am Front-End <span>Web Developer</span>
          </h1>
          <p>
            Hello! I'm Gobinda Prasad Paudel, a passionate front-end developer
            with a solid foundation in HTML, CSS, and JavaScript. My expertise
            lies in crafting user-friendly and visually appealing websites. I
            love transforming ideas into functional and responsive interfaces.
            With my keen eye for detail and dedication to delivering
            high-quality work, I'm confident that I can contribute to any
            exciting web development projects.
          </p>
          <div className="btns">
            <button className="btn-1">
              <a href={cv} download="CV.pdf">
                Download CV
              </a>
            </button>
            <button className="btn-2">
              <a href="#projects">View Portfolio</a>
            </button>
          </div>
        </div>
        <div className="item2">
          <img
            className="non_main_photo"
            src={image} // Corrected image path
            alt="Photo"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
