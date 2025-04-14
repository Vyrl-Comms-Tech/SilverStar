import React,{ useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "../styles/faq.css";

export default function FAQSection() {
  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState(0);

  // FAQ data
  const faqItems = [
    {
      question: "What are good specs for business laptops?",
      answer: `There are many variables to consider when purchasing a business laptop, and the machine required will be 
      determined by who will be using it. For example, a graphic designer will want a bigger screen, more storage, and a 
      faster graphics card. Someone in administration or research will require lightning-fast performance, high security, and 
      comfortable use for lengthy periods.
      
      However, some features that are commonly desired in a business laptop include long battery life, high performance, 
      durability, and security.`,
    },
    {
      question: "What are good specs for business laptops?",
      answer: `There are many variables to consider when purchasing a business laptop, and the machine required will be 
      determined by who will be using it. For example, a graphic designer will want a bigger screen, more storage, and a 
      faster graphics card. Someone in administration or research will require lightning-fast performance, high security, and 
      comfortable use for lengthy periods.
      
      However, some features that are commonly desired in a business laptop include long battery life, high performance, 
      durability, and security.`,
    },
    {
      question: "What are good specs for business laptops?",
      answer: `There are many variables to consider when purchasing a business laptop, and the machine required will be 
      determined by who will be using it. For example, a graphic designer will want a bigger screen, more storage, and a 
      faster graphics card. Someone in administration or research will require lightning-fast performance, high security, and 
      comfortable use for lengthy periods.
      
      However, some features that are commonly desired in a business laptop include long battery life, high performance, 
      durability, and security.`,
    },
    {
      question: "What are good specs for business laptops?",
      answer: `There are many variables to consider when purchasing a business laptop, and the machine required will be 
      determined by who will be using it. For example, a graphic designer will want a bigger screen, more storage, and a 
      faster graphics card. Someone in administration or research will require lightning-fast performance, high security, and 
      comfortable use for lengthy periods.
      
      However, some features that are commonly desired in a business laptop include long battery life, high performance, 
      durability, and security.`,
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