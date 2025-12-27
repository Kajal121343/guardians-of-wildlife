import React from "react";
import ContactForm from "../components/contact/ContactForm";
import FAQCard from "../components/contact/FAQCard";

const ContactUs = () => {
  const faqs = [
    {
      question: "How can I join the volunteer program?",
      answer: "You can join by filling out the 'Join Team' form on our website."
    },
    {
      question: "Can I adopt an animal?",
      answer: "Yes, we provide guidance for adopting animals through our conservation partners."
    },
    {
      question: "Is there any age restriction to volunteer?",
      answer: "Volunteers must be 18 years or older to participate in field activities."
    },
    {
      question: "How is my query handled?",
      answer: "All queries are recorded and attended to by our support team or government representatives."
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-700 text-center mb-6">Contact Guardians of Wildlife</h1>
      <ContactForm />
      
      <h2 className="text-2xl font-bold mb-4 text-green-700 text-center">FAQs</h2>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQCard key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
