import React, { useState } from "react";
import "../styles/contact-us.css";

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    fieldOfActivity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <>
      <div className="contact-us-container-main">
        <div className="contact-us-container">
          {/* Header section */}
          <div className="contact-us-header">
            <h1 className="contact-us-title">
              Contact <span className="contact-us-highlight">us</span>
            </h1>
            <p className="contact-us-subtitle">
              Get IN TOUCH, Leading
              <span className="contact-us-highlight"> IT <br /> Suppliers in UAE</span>
            </p>
          </div>

          {/* Content section (form and contact info) */}
          <div className="contact-us-content">
            {/* Contact Info */}
            <div className="contact-us-info">
              <div className="contact-us-item">
                <div className="contact-us-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span>+971 557665761</span>
              </div>

              <div className="contact-us-item">
                <div className="contact-us-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <span>info@ssedubai.com</span>
              </div>

              <div className="contact-us-item">
                <div className="contact-us-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-us-address">
                  <span>
                  Mag WH S03,Unit 103 - Al Quoz Logistics Park - Dubai
                  </span>
                  {/* <span>PO Box 29364</span> */}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact-us-form">
              <form className="contact-us-form-main" onSubmit={handleSubmit}>
                <div className="form-us-group">
                  <input
                    className="contact-us-input"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-us-row">
                  <div className="form-us-group">
                    <input
                      className="contact-us-input"
                      type="tel"
                      name="phone"
                      placeholder="Phone (+968)"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-us-group">
                    <input
                      className="contact-us-input"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-us-group">
                  <input
                    className="contact-us-input"
                    type="text"
                    name="fieldOfActivity"
                    placeholder="Field of activity"
                    value={formData.fieldOfActivity}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-us-submit">
                  <button type="submit" className="send-us-button">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="contact-us-img">
          <img src="/img/contact-us-blob.svg" alt="" />
        </div>
      </div>
    </>
  );
}