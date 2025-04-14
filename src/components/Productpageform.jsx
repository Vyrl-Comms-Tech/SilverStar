import React from "react";
import "../styles/Productpageform.css";
import { Check } from "lucide-react";
function Productpageform() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted!");
  };

  return (
    <>
      <div className="mainformsection">
        <div className="formholder">
          <section className="contact-section">
            <div className="container">
              <div className="contact-grid">
                <div className="benefits-column">
                  <div className="benefits-header">
                    <h2>
                      Discover the Benefits of Working with <br/>
                      <span className="highlight">SSE Dubai</span>
                    </h2>
                  </div>

                  <ul className="benefits-list">
                    {[
                      "Volume Discounts",
                      "Exclusive Offers",
                      "Personal Account Manager",
                      "Credit Account",
                      "Credit Account",
                      "Credit Account",
                    ].map((benefit, index) => (
                      <li key={index} className="benefit-item">
                        <div className="check-icon">
                          <Check className="icon" />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="benefits-description">
                    Through our working partnership with the world's leading
                    laptop manufacturers, we are able to pass on significant
                    savings directly to company and education institutions.
                    We're enthusiastic about what we do, and it's our goal to
                    provide you with the greatest deals from all of the top
                    laptop brands in the UAE.
                  </p>

                  <button className="contact-button">Contact</button>
                </div>

                <div className="form-column">
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Full name"
                          className="form-input"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Phone number"
                          className="form-input"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Company email"
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label
                          className="form-label"
                          htmlFor="bulk-requirement"
                        >
                          Bulk Requirement
                        </label>
                        <select
                          id="bulk-requirement"
                          className="form-select"
                          defaultValue=""
                          required
                        >
                          <option value="small">Small (1-10)</option>
                          <option value="medium">Medium (11-50)</option>
                          <option value="large">Large (50+)</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label
                          className="form-label"
                          htmlFor="corporate-budget"
                        >
                          Corporate Budget
                        </label>
                        <select
                          id="corporate-budget"
                          className="form-select"
                          defaultValue=""
                          required
                        >
                          <option value="low">Under $10,000</option>
                          <option value="medium">$10,000 - $50,000</option>
                          <option value="high">$50,000+</option>
                        </select>
                      </div>
                    </div>

                    <div className="brand-preference">
                      <p className="preference-label">
                        Which Brand Would You Prefer?
                      </p>
                      <div className="checkbox-group">
                        {["Lenovo", "Dell", "HP"].map((brand) => (
                          <div key={brand} className="checkbox-item">
                            <div className="custom-checkbox">
                              <input
                                type="checkbox"
                                id={brand}
                                className="checkbox-input"
                              />
                              <span className="checkbox-mark"></span>
                            </div>
                            <label htmlFor={brand} className="checkbox-label">
                              {brand}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="form-group">
                      <textarea
                        placeholder="Message"
                        className="form-textarea"
                      ></textarea>
                    </div>

                    <div className="send-button-container">
                      <button type="submit" className="send-button">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Productpageform;
