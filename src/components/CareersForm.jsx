// import React from "react";
// import "../styles/careers-form.css"

// const careersForm = () => {
//   return (
//     <>
//       {/* contact */}
//       <div className="community-guide-contact">
//         <div className="community-guide-contact-left">
//           <h1> Let’s Make IT Happen.</h1>
//           <p>
//           Ready to be part of something bigger? Fill out the form below and take your first step toward a rewarding career with Silver Star Electronics.
//           </p>
//         </div>
//         {/*  */}
//         <div className="community-guide-contact-right">
//           <h1>Contact us</h1>
//           <p>
//             From property tours to final paperwork, we make the buying journey
//             seamless.
//           </p>
//           <div className="community-guide-contact-right-input">
//             <input type="text" placeholder="First name" />
//             <input type="text" placeholder="Last name" />
//           </div>
//           <div className="community-guide-contact-right-input">
//             <input type="email" placeholder="Email" />
//             <input type="tel" placeholder="Phone number" />
//           </div>
//           <input type="text" placeholder="Message" />

//           <button>submit</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default careersForm;
import React, { useState } from "react";
import "../styles/careers-form.css";
import { NavLink, useNavigate } from "react-router-dom";

const CareersForm = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    // Create FormData object
    const formDataToSend = new FormData();

    // Replace with your actual Web3Forms access key
    formDataToSend.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");

    // Append form data
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("position", formData.position);
    formDataToSend.append("message", formData.message);

    // Append file if exists
    if (formData.resume) {
      formDataToSend.append("resume", formData.resume);
    }

    // Optional: Add subject line
    formDataToSend.append("subject", "New Career Application Submission");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          position: "",
          resume: null,
          message: "",
        });

        // Reset file input
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = "";

        // Optional: Show success message for a few seconds then clear
        setTimeout(() => {
          setSubmitStatus("");
        }, 5000);
      } else {
        console.error("Error:", data);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <div className="contact-us">
        <div className="contact-us-main-container">
          <div className="contact-us-main-content">
            <div className="contact-us-icon">
              <img src="/Assets/fb.svg" alt="fb logo" />
              <img src="/Assets/x.svg" alt="x logo" />
              <img src="/Assets/insta.svg" alt="instagram logo" />
            </div>

            <form className="contact-us-text" onSubmit={handleSubmit}>
              <h1>Let's Make IT Happen.</h1>
              <p>
                Ready to be part of something bigger? Fill out the form below
                and take your first step toward a rewarding career with Silver
                Star Electronics.
              </p>
              
              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div
                  style={{
                    color: "#4CAF50",
                    marginBottom: "20px",
                    padding: "10px",
                    backgroundColor: "rgba(76, 175, 80, 0.1)",
                    borderRadius: "4px",
                    border: "1px solid rgba(76, 175, 80, 0.3)",
                  }}
                >
                  Thank you! Your application has been sent successfully.
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  style={{
                    color: "#f44336",
                    marginBottom: "20px",
                    padding: "10px",
                    backgroundColor: "rgba(244, 67, 54, 0.1)",
                    borderRadius: "4px",
                    border: "1px solid rgba(244, 67, 54, 0.3)",
                  }}
                >
                  Sorry, there was an error sending your application. Please try
                  again.
                </div>
              )}

              {/* Full Name */}
              <div className="contact-us-input">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="full-width-input"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  id="input-1"
                  />
              </div>

              {/* Email and Phone */}
              <div className="contact-us-input">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  id="input-2"
                  />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  id="input-3"
                  />
              </div>

              {/* Position Interested In */}
              <div className="contact-us-input">
                <input
                  type="text"
                  name="position"
                  placeholder="Position Interested In"
                  className="full-width-input"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  id="input-3"
                  />
              </div>

              {/* Upload CV/Resume */}
              <div className="contact-us-input file-upload-container">
                <label htmlFor="resume-upload" className="file-upload-label">
                  <span className="file-upload-text">
                    {formData.resume ? formData.resume.name : "Upload CV / Resume"}
                  </span>
                  {/* <span className="file-upload-icon">📎</span> */}
                </label>
                <input
                  type="file"
                  id="resume-upload"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  style={{ display: "none" }}
                  />
              </div>

              {/* Message (optional) */}
              <input
                className="input"
                type="text"
                name="message"
                placeholder="Message (optional)"
                value={formData.message}
                onChange={handleInputChange}
                id="input-5"
              />

              <button
                type="submit"
                className="fancy-button"
                // id="send-btn"
                disabled={isSubmitting}
                style={{
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
              >
                <h4>{isSubmitting ? "Submitting..." : "Submit Application"}</h4>
              </button>
            </form>
          </div>
        </div>
        
        {/* Blob images with refs for animation */}
        <img src="/img/Rectangle 2.avif" alt="" id="blob11" />
        <img src="/img/Rectangle 1.avif" alt="" id="blob22" />
      </div>
    </>
  );
};

export default CareersForm;