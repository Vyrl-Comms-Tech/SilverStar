import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "../styles/faq.css";

export default function FAQSection() {
  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState(0);

  // FAQ data
  const faqItems = [
    {
      question: "What types of IT products do you offer?",
      answer: `We offer a full range of IT products including laptops, desktops, servers, storage solutions, networking equipment, software licenses, surveillance systems, POS machines, AV solutions, and cloud services from top brands like Lenovo, Dell, HP, Microsoft, Cisco, and Apple.`,
    },
    {
      question: "Are all your products certified and covered by warranty?",
      answer: `Yes, we are authorized partners for leading global brands. All products we supply are 100% genuine and come with full manufacturer warranties and local support options.`,
    },
    {
      question:
        "Can you customize IT solutions based on our company’s specific needs and budget?",
      answer: `Absolutely. Our team consults with you to understand your requirements, then sources and integrates solutions tailored to your business goals all while staying within your stipulated budget.`,
    },
    {
      question: "How quickly can you deliver IT products across the UAE?",
      answer: `We offer same day or next day deliveries across the UAE, ensuring minimal downtime and quick deployment for your business operations.`,
    },
  ];

  // Toggle FAQ item
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      <div className="faq-container">
        <h1 className="faq-heading">
          Frequently
          <br /> asked <span className="highlight">questions</span>
        </h1>

        <div className="faq-items">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <MdOutlineKeyboardArrowDown className="chevron-icon" />
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
