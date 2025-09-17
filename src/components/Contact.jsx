import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: "01",
    question: "What is Video Max?",
    answer:
      "YouTube Downloader is a free online tool that allows you to download and save videos from YouTube to your device easily.",
  },
  {
    id: "02",
    question: "Is Video Max free?",
    answer:
      "Yes, this downloader is completely free to use with no hidden charges or subscription required.",
  },
  {
    id: "03",
    question: "Where are the downloaded videos stored?",
    answer:
      "Downloaded videos are saved in your device’s default download folder or the location you select when saving.",
  },
  {
    id: "04",
    question: "Can we download unlimited videos?",
    answer:
      "Yes, there are no restrictions. You can download as many videos as you like without limits.",
  },
];

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="bg-white"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div
          className="bg-gray-600 p-8 sm:p-12 text-white relative"
          style={{
            clipPath:
              "polygon(0 40px, 40px 0, calc(100% - 40px) 0, 100% 40px, 100% calc(100% - 40px), calc(100% - 40px) 100%, 40px 100%, 0 calc(100% - 40px))",
          }}
        >
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-light mb-8">
            Frequently{" "}
            <span className="font-bold text-red-600">Asked Questions</span>
          </h2>

          {/* Questions */}
          <div className="divide-y divide-gray-700">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="py-6">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-gray-400 font-bold">{faq.id}.</span>
                    <span className="text-white text-base sm:text-lg">
                      {faq.question}
                    </span>
                  </span>
                  <span className="text-gray-400">
                    {openIndex === index ? (
                      <i className="fa-solid fa-chevron-up"></i>
                    ) : (
                      <i className="fa-solid fa-chevron-down"></i>
                    )}
                  </span>
                </button>

                {/* Dropdown Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden mt-3 ml-10 text-gray-400 text-sm sm:text-base"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© 2025 Video Max</p>

          <img
            src="/images/redplay.png"
            alt="Logo"
            className=" w-12 h-12 sm:w-14 sm:h-14 lg:w-40  lg:h-16 object-contain"
          />

          <div className="flex gap-6">
            <a href="#" className="hover:text-red-600">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-600">
              Terms Of Services
            </a>
            <a href="#" className="hover:text-red-600">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
