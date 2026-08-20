import { NavLink } from "react-router-dom";
import {
    FaGithub,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    {/* Logo */}
                    <div className="footer-brand">
                        <NavLink to="/" className="footer-logo">
                            <span>&lt;</span>
                            CS
                            <span>/&gt;</span>
                        </NavLink>

                        <p>
                            Building digital experiences that solve real problems.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="footer-links">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/experience">Experience</NavLink>
                        <NavLink to="/skills">Skills</NavLink>
                        <NavLink to="/education">Education</NavLink>
                        <NavLink to="/certificates">Certificates</NavLink>
                        <NavLink to="/projects">Projects</NavLink>
                        <NavLink to="/resume">Resume</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>

                    {/* Social Icons */}
                    <div className="footer-socials">
                        <a
                            href="https://github.com/Chanchala7654321"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/chanchala-sidar/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href="https://x.com/Chanchala654321"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Twitter"
                        >
                            <FaXTwitter />
                        </a>

                        <a
                            href="mailto:chanchalasidar24@navgurukul.org"
                            aria-label="Email"
                        >
                            <FiMail />
                        </a>
                    </div>
                </div>

                {/* Bottom */}
                <div className="footer-bottom">
                    <p>
                        © 2026 Chanchala Sidar. Built with React, CSS & passion.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;