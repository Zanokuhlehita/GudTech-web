import React, { useState } from 'react';
// import './FAQ.css';

const FAQ = () => {
  const [openQuestion, setopenQuestion] = useState(null);
  
  const questions = [
    { question: 'Are you the cheapest in your area ?', answer: 'yet to be answered' },
    { question: 'How long do you garantee your jobs ?', answer: 'yet to be answered' },
    { question: 'Which cities do you cover ?', answer: 'yet to be answered' },
  ];

  const handleQuestionClick = (index) => {
    setopenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="section">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="faq">
        {questions.map((q, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => handleQuestionClick(index)}>
              {/* <span className="faq-dot">•</span> */}
              {q.question}
              <span className="faq-arrow">{openQuestion === index ? '▼' : '▶'}</span>
            </div>
            {openQuestion === index && <div className="faq-answer">{q.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
