import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Container, Title } from "../../Components/Common/Design"; 
import { faqData } from "../../Utils/Data";


export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container className="pt-32 pb-10">
      <Title level={2} className="text-center text-primary mb-6">
        Frequently Asked Questions
      </Title>
      <div className="max-w-3xl mx-auto">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4 border rounded-lg shadow-sm">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-4 flex justify-between items-center text-left bg-white rounded-lg"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};


