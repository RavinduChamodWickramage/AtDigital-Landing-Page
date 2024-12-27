import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import "./FAQ.css";

const FAQ = () => {
  const [activeKey, setActiveKey] = useState("0");

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. In ultricies lacus sit amet quam condimentum sagittis. Faucibus commodo suscipit id ipsum elementum ultrices.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer vehicula.",
    },
  ];

  const toggleKey = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title text-center">Frequently Asked Questions</h1>

      <Accordion
        activeKey={activeKey}
        className="faq-accordion"
      >
        {faqs.map((faq, index) => (
          <Accordion.Item
            key={index}
            eventKey={index.toString()}
            className="faq-item"
          >
            <Accordion.Header
              className="faq-header"
              onClick={() => toggleKey(index.toString())}
            >
              {faq.question}
              <span className="toggle-symbol">
                {activeKey === index.toString() ? "−" : "+"}
              </span>
            </Accordion.Header>
            <Accordion.Body className="faq-body">{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
