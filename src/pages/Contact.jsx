import React, { useState } from "react";
import {
    FiMail,
    FiLinkedin,
    FiGithub,
    FiMapPin,
    FiMessageCircle,
    FiSend,
} from "react-icons/fi";
import "../styles/Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = `Portfolio Contact from ${formData.name}`;

        const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;

        window.location.href = `mailto:chanchalasidar24@navgurukul.org?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-container">

                {/* Section Heading */}
                <div className="contact-heading">
                    <p className="contact-label">Get In Touch</p>
                    <h2>Contact</h2>
                    <p className="contact-subtitle">
                        Feel free to reach out for opportunities, collaborations, or just a friendly hello.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Left Side */}
                    <div className="contact-content">
                        <h3>Have an idea? Let's build something together.</h3>

                        <p className="contact-description">
                            I'm open to internships, entry-level opportunities, and
                            interesting projects. Let's create something meaningful.
                        </p>

                    {/* Buttons */}
                    <div className="contact-buttons">
                        <a
                            href="mailto:chanchalasidar24@navgurukul.org"
                            className="talk-btn"
                        >
                            <FiMessageCircle />
                            Let's Talk
                        </a>

                        <a
                            href="mailto:chanchalasidar24@navgurukul.org"
                            className="email-btn"
                        >
                            <FiMail />
                            Email Me
                        </a>
                    </div>

                    {/* Contact Cards */}
                    <div className="contact-cards">

                        {/* Email */}
                        <a
                            href="mailto:chanchalasidar24@navgurukul.org"
                            className="contact-card"
                        >
                            <div className="contact-icon">
                                <FiMail />
                            </div>

                            <div className="contact-info">
                                <span>Email</span>
                                <strong>chanchalasidar24@navgurukul.org</strong>
                            </div>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/chanchala-sidar/"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-card"
                        >
                            <div className="contact-icon">
                                <FiLinkedin />
                            </div>

                            <div className="contact-info">
                                <span>LinkedIn</span>
                                <strong>linkedin.com/in/chanchala-sidar</strong>
                            </div>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/Chanchala7654321"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-card"
                        >
                            <div className="contact-icon">
                                <FiGithub />
                            </div>

                            <div className="contact-info">
                                <span>GitHub</span>
                                <strong>github.com/Chanchala7654321</strong>
                            </div>
                        </a>

                        {/* Location */}
                        <div className="contact-card">
                            <div className="contact-icon">
                                <FiMapPin />
                            </div>

                            <div className="contact-info">
                                <span>Location</span>
                                <strong>Jashpur, Chhattisgarh, India</strong>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="contact-form-wrapper">
                    <form className="contact-form" onSubmit={handleSubmit}>

                        <h3>Send a message</h3>

                        <p>
                            Fill out the form below and I'll get back to you shortly.
                        </p>

                        {/* Name */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Message */}
                        <div className="form-group">
                            <label htmlFor="message">Message</label>

                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                maxLength="500"
                                placeholder="Tell me about your project, opportunity, or just say hi..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />

                            <div className="character-count">
                                {formData.message.length}/500
                            </div>
                        </div>

                        {/* Submit */}
                        <button type="submit" className="send-btn">
                            <FiSend />
                            Send Message
                        </button>

                    </form>
                </div>

            </div>
        </div>
    </section>
    );
};

export default Contact;

