import React from 'react'
import { useState } from 'react';

export default function FAQ() {
    const FaqItem = ({ question, answer }) => {
        const [isOpen, setIsOpen] = useState(false);
      
        return (
          <div className="border rounded-md overflow-hidden">
            <button
              className="w-full text-left px-4 py-2 bg-gray-200 hover:bg-gray-300 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="font-semibold">{question}</span>
              <span className="ml-auto">{isOpen ? '▲' : '▼'}</span>
            </button>
            {isOpen && (
              <div className="p-4 bg-gray-100">
                <p>{answer}</p>
              </div>
            )}
          </div>
        );
      };
      
      const FAQ = () => {
        return (
          <div className="max-w-lg mx-auto mt-8">
            <h1 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h1>
            <div>
              <FaqItem
                question="What is Lorem Ipsum?"
                answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              />
              <FaqItem
                question="Why do we use it?"
                answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
              />
              <FaqItem
                question="Where does it come from?"
                answer="Contrary to popular belief, Lorem Ipsum is not simply random text."
              />
              <FaqItem
                question="Where can I get some?"
                answer="There are many variations of passages of Lorem Ipsum available."
              />
            </div>
          </div>
        );
      };
}
