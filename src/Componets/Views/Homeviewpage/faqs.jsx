import { useState } from "react";

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const faqs = [
    {
      question: "How can I add a new product?",
      answer:
        'Go to the Products section in your dashboard and click "Add New Product." Fill in the product details, upload images, and assign it to the desired website(s).',
    },
    {
      question: "How do I view analytics and reports?",
      answer:
        "Navigate to the Analytics section to see charts, revenue summaries, and detailed reports per product or website. Export options are available for further analysis.",
    },
    {
      question: "Can I manage multiple websites from one account?",
      answer:
        "Yes! You can add multiple websites under one seller account and manage products, orders, and analytics across all of them from a single dashboard.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="m-2 rounded-md border border-default overflow-hidden shadow-xs">
      {faqs.map((faq, index) => (
        <div key={index}>
          <h2>
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-body border border-x-0 border-b-default hover:text-heading hover:bg-neutral-secondary-medium gap-3"
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
            >
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 me-2 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6M12 9v6"
                  />
                </svg>
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 shrink-0 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m5 15 7-7 7 7"
                />
              </svg>
            </button>
          </h2>

          {openIndex === index && (
            <div className="p-4 md:p-5 border border-t-0 border-b-default">
              <p className="text-body">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQAccordion;
