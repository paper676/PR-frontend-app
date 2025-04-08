import { useState } from "react";
import { ChevronDown } from "lucide-react"; // Install lucide-react for icons

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-3 text-lg font-semibold text-gray-900 hover:text-blue-600"
      >
        {question}
        <ChevronDown
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-300 ${isOpen ? "max-h-40" : "max-h-0"
          }`}
      >
        <p className="p-2 text-gray-700">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { question: "What is this service about?", answer: "We connect users with local service providers for home repairs, cleaning, and more." },
    { question: "How do I book a service?", answer: "Simply select a category, choose a provider, and book an appointment online." },
    { question: "Is there a cancellation fee?", answer: "Cancellations within 24 hours may incur a small fee, depending on the provider." },
  ];

  return (
    <div className="w-full p-4 bg-white shadow-md rounded-lg">
      {faqs.map((faq, index) => (
        <FAQItem key={index} {...faq} />
      ))}
    </div>
  );
};

export default FAQ;