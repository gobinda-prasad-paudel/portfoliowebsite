import { info, socialLinks } from "@/constants/data";
import React from "react";

const CV = () => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="max-w-4xl mx-auto py-5 px-6" id="cv">
      <h1 className="text-4xl font-bold mb-6 text-center">Gobinda Prasad Paudel</h1>
      <p className="text-center text-lg text-muted-foreground mb-8">
        Web Developer | IoT & Embedded Systems Enthusiast | AI Projects
      </p>

      {/* Contact */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <ul className="space-y-2">
          <li>Email: <a href={`mailto:${info[1].email}`} className="text-primary">{info[1].email}</a></li>
          {/* <li>Phone: +977-XXXXXXXXXX</li> */}
          <li>LinkedIn: <a href={`${socialLinks[1].url}`} target="_blank" rel="noopener noreferrer" className="text-primary">{socialLinks[1].url}</a></li>
          <li>GitHub: <a href={`${socialLinks[0].url}`} target="_blank" rel="noopener noreferrer" className="text-primary">{socialLinks[0].url}</a></li>
        </ul>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="space-y-4">
          <div>
            <p className="font-bold">School</p>
            <p>Hamro Pahunch Secondary School | SEE – Tulsipur, Dang</p>
          </div>
          <div>
            <p className="font-bold">High School</p>
            <p>Trinity International School and College | A levels – Dillibazar Height, Kathmandu, Nepal</p>
          </div>
          {/* <div>
            <p className="font-bold">High School</p>
            <p>Science Stream | 2018 – 2022</p>
          </div> */}
        </div>
      </section>

      {/* Experience */}
      {/* <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-4">
          <div>
            <p className="font-bold">Intern - Embedded Systems Developer</p>
            <p>XYZ Company | Jun 2024 – Aug 2024</p>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Developed IoT solutions using ESP32 and PN532 NFC modules</li>
              <li>Worked on real-time data acquisition and dashboard development</li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Freelance Web Developer</p>
            <p>Self-employed | 2023 – Present</p>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Designed responsive portfolio websites for clients using React, Tailwind CSS, and TypeScript</li>
              <li>Implemented interactive UI components and SEO-friendly structures</li>
            </ul>
          </div>
        </div>
      </section> */}

      {/* Projects */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="space-y-4">
          <div>
            <p className="font-bold">EduCare – Emergency Response System</p>
            <p className="text-muted-foreground">
              Built a QR-based emergency system for students using web and mobile apps connected with IoT devices.
            </p>
          </div>
          <div>
            <p className="font-bold">Public Transport Management System (PTM5)</p>
            <p className="text-muted-foreground">
              Developed a real-time bus tracking system with NFC cards for passengers, driver SOS, and admin monitoring dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <li className="bg-primary/20 text-primary px-3 py-1 rounded">React</li>
          <li className="bg-primary/20 text-primary px-3 py-1 rounded">TypeScript</li>
          <li className="bg-primary/20 text-primary px-3 py-1 rounded">Tailwind CSS</li>
          <li className="bg-primary/20 text-primary px-3 py-1 rounded">Node.js</li>
          <li className="bg-primary/20 text-primary px-3 py-1 rounded">Vite</li>
          <li className="bg-primary/20 text-primary px-3 py-1 rounded">Embedded Systems</li>
          <li className="bg-primary/20 text-primary px-3 py-1 rounded">IoT (ESP32)</li>
          <li className="bg-primary/20 text-primary px-3 py-1 rounded">AI / ML Basics</li>
        </ul>
      </section>

      {/* Print CV Button */}
      <div className="text-center mt-12" id="print_button">
        <button
          onClick={handlePrint}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/80 transition-colors"
        >
          Print CV
        </button>
      </div>

      <style>
        {`
    @media print {
      body * {
        visibility: hidden;
      }
      #cv, #cv * {
        visibility: visible;
      }
      #cv {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
      }
         #print_button, #print_button * {
        visibility: hidden;
      }
      
    }
  `}
      </style>

    </div>
  );
};

export default CV;
