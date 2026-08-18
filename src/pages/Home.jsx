import {
    FaLinkedinIn,
    FaGithub,
    FaXTwitter,
} from "react-icons/fa6";

import {
    FiMail,
    FiArrowRight,
    FiArrowDown,
    FiFileText,
} from "react-icons/fi";

import "../styles/Home.css";

const Home = () => {
    return (
        <section className="home">
            <div className="home-container">

                {/* Left Content */}
                <div className="home-content">

                    {/* Availability */}
                    <div className="availability">
                        <span className="status-dot"></span>
                        <span>Available for opportunities</span>
                    </div>

                    {/* Heading */}
                    <h1>
                        Hi, I'm <span>Chanchala</span>
                    </h1>

                    {/* Role */}
                    <p className="home-role">
                        Full-Stack Developer · NavGurukul Fellow · Open Source Contributor
                    </p>

                    {/* Description */}
                    <p className="home-description">
                        A passionate developer trained at NavGurukul, focused on building
                        modern, responsive web applications with React, JavaScript, and
                        Node.js.
                    </p>

                    {/* Social Links */}
                    <div className="social-links">

                        <a
                            href="https://www.linkedin.com/in/chanchala-sidar/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href="https://github.com/Chanchala7654321"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="mailto:chanchalasidar24@navgurukul.org"
                            aria-label="Email"
                        >
                            <FiMail />
                        </a>

                        <a
                            href="https://x.com/Chanchala654321"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="X"
                        >
                            <FaXTwitter />
                        </a>

                    </div>

                    {/* Buttons */}
                    <div className="home-buttons">

                        <a href="/contact" className="connect-btn">
                            <span>Let's Connect</span>
                            <FiArrowRight />
                        </a>

                        <button className="resume-btn">
                            <FiFileText />
                            <span>Resume</span>
                        </button>

                    </div>

                </div>

                {/* Right Image */}
                <div className="home-image">
                    <img
                        src="https://readdy.ai/api/search-image?query=Flat%20vector%20illustration%20of%20a%20young%20software%20developer%20sitting%20at%20a%20modern%20desk%20with%20multiple%20monitors%20displaying%20code%2C%20clean%20minimal%20design%20style%2C%20soft%20teal%20and%20blue%20color%20accents%2C%20light%20gray%20background%2C%20professional%20workspace%20with%20a%20small%20plant%20and%20coffee%20cup%2C%20friendly%20character%20design%2C%20no%20text%2C%20high%20quality%20digital%20art&width=600&height=500&seq=hero-dev-illustration&orientation=landscape"
                        alt="Developer workspace illustration"
                    />
                </div>

            </div>

            {/* Scroll / Experience Button */}
            <a
                href="/experience"
                className="scroll-button"
                aria-label="Go to experience"
            >
                <FiArrowDown />
            </a>

        </section>
    );
};

export default Home;

