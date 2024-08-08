import React from 'react';

const FAQComponent = ({ faqs }) => {
  return (
    <div className="faqs-pdp">
      {faqs.map((faq, index) => (
        <div key={index}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
