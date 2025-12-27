import React, { useState } from "react";

const FAQCard = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white p-4 rounded shadow-md mb-3 cursor-pointer">
      <div onClick={() => setOpen(!open)} className="flex justify-between items-center">
        <h3 className="font-bold">{question}</h3>
        <span>{open ? "-" : "+"}</span>
      </div>
      {open && <p className="mt-2 text-white-700">{answer}</p>}
    </div>
  );
};

export default FAQCard;
