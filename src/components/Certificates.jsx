import React from "react";

import jsVueImage from "../images/Javascript,AjaxAndIntroToVueJS.jpg"; // Corrected path for Javascript, Ajax, and VueJS image
import htmlCssImage from "../images/HTML And CSS.jpg"; // Corrected path for HTML and CSS image
import premierProImage from "../images/Adobe Premier Pro From BEgining To Pro.jpg"; // Corrected path for Adobe Premier Pro image
import es6Image from "../images/ES6.jpg"; // Corrected path for ES6 image
import photoshopImage from "../images/Photoshop.jpg"; // Corrected path for Photoshop image

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Certificates = () => {
  const certificateImages = [
    {
      src: jsVueImage,
      alt: "Javascript, Ajax And Intro To VueJS",
    },
    {
      src: htmlCssImage,
      alt: "HTML And CSS",
    },
    {
      src: premierProImage,
      alt: "Adobe Premier Pro",
    },
    {
      src: es6Image,
      alt: "ES6",
    },
    {
      src: photoshopImage,
      alt: "Photoshop",
    },
  ];

  return (
    <section className="certificates" id="certificates">
      <div className="main">
        <h5>My Certificates</h5>
        <h1 className="main-h1">
          Certificates Which I Have <span>Achieved</span>
        </h1>
        <p>
          In my journey of continuous learning and personal growth, I am excited
          to present the numerous certificates I have achieved on my portfolio
          website. These certificates represent my dedication to learning and
          showcase my expertise in various domains. From technical
          certifications in programming and software development to creative
          achievements in design and multimedia, my portfolio proudly displays
          the milestones I have accomplished in my quest for knowledge. Each
          certificate signifies not only an achievement but also a strong
          commitment to growth and excellence, reflecting my unwavering
          determination to embrace challenges and excel in my pursuits.
        </p>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swiper"
      >
        {certificateImages.map((certificate, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <img src={certificate.src} alt={certificate.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Certificates;
