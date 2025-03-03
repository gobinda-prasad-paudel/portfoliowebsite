import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import cv from "../docs/cv(resume).pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);
  const links = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "#skills" },
    { name: "Certificates", href: "#certificates" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setHasBackground(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${hasBackground ? "scrolled" : ""}`}>
        <div className="logo-container">
          <h1 className={`main_txt ${hasBackground ? "scrolled_txt" : ""}`}>
            Gobinda Paudel
          </h1>
          <h1 className="main_txt_smscreen">Gobinda</h1>
        </div>

        <ul className="desktop-nav">
          {links.map((link, id) => (
            <a href={link.href} key={id} className="nav-link">
              {link.name}
            </a>
          ))}
        </ul>

        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </header>

      <div className={`mobile-navigation ${isOpen ? "active" : ""}`}>
        <ul className="mobile-nav-list">
          {links.map((link, id) => (
            <a
              href={link.href}
              key={id}
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a className="btn-mobile-navigation" href={cv} download="CV.pdf">
            Download CV
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
