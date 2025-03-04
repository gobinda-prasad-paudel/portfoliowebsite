import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: "2020",
    title: "Developed Portfolio Website",
    description:
      "Developed this website and started to timely update ui and data.",
  },
  {
    year: "2024",
    title: "Built a full stack e-commerce website.",
    description: "Developed a basic Django app and deployed it online.",
  },
  {
    year: "2024",
    title: "PTMS",
    description:
      "Developed Public Transport Management System(PTMS) while participating in Trinity A-levels Intra College hackathon.",
  },
  {
    year: "2024",
    title: "EduCare",
    description:
      "Developed EduCare while participating in Trinity Intra College IT Competition and won the competition.",
  },
  {
    year: "2025",
    title: "EMS",
    description:
      "Developed EduCare while participating in Cambridge Code League. ",
  },
];

const Timeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(".timeline-item");

    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { autoAlpha: 0, y: 50, scale: 0.8 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="timeline-container">
      <h1 className="timeline-title">My Journey</h1>
      <div ref={timelineRef} className="timeline-wrapper">
        <div className="timeline-line"></div>

        {timelineData.map((event, index) => (
          <div
            key={index}
            className={`timeline-item ${
              index % 2 === 0 ? "timeline-item-left" : "timeline-item-right"
            }`}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <h2 className="timeline-year">{event.year}</h2>
              <h3 className="timeline-event-title">{event.title}</h3>
              <p className="timeline-event-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
