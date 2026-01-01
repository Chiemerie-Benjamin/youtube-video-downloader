// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';

const EMAIL = 'mbaezuechiemerie@outlook.com';

const faqs = [
  {
    id: '01',
    question: 'What is Video Max?',
    answer:
      'YouTube Downloader is a free online tool that allows you to download and save videos from YouTube to your device easily.',
  },
  {
    id: '02',
    question: 'Is Video Max free?',
    answer:
      'Yes, this downloader is completely free to use with no hidden charges or subscription required.',
  },
  {
    id: '03',
    question: 'Where are the downloaded videos stored?',
    answer:
      'Downloaded videos are saved in your device’s default download folder or the location you select when saving.',
  },
  {
    id: '04',
    question: 'Can we download unlimited videos?',
    answer:
      'Yes, there are no restrictions. You can download as many videos as you like without limits.',
  },
];

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [copied, setCopied] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const openGmailCompose = () => {
    const subject = encodeURIComponent('Inquiry about Video Max');
    const body = encodeURIComponent('Hi,\n\nI would like to ask about...');
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${subject}&body=${body}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openOutlookWebCompose = () => {
    const subject = encodeURIComponent('Inquiry about Video Max');
    const body = encodeURIComponent('Hi,\n\nI would like to ask about...');
    const url = `https://outlook.live.com/owa/?path=/mail/action/compose&to=${EMAIL}&subject=${subject}&body=${body}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      alert('Unable to copy automatically. Please copy manually: ' + EMAIL);
    }
  };

  return (
    <div
      className="bg-white"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16">
        <motion.div
          className="bg-gray-600 p-6 sm:p-10 md:p-12 text-white relative rounded-xl sm:rounded-2xl"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-light mb-6 sm:mb-8 text-center sm:text-left"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Frequently{' '}
            <span className="font-bold text-red-600">Asked Questions</span>
          </motion.h2>

          <div className="divide-y divide-gray-700">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="py-4 sm:py-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="flex items-center gap-3 sm:gap-4">
                    <span className="text-gray-400 font-bold text-sm sm:text-base">
                      {faq.id}.
                    </span>
                    <span className="text-white text-sm sm:text-lg">
                      {faq.question}
                    </span>
                  </span>
                  <span className="text-gray-400 text-sm sm:text-base">
                    {openIndex === index ? (
                      <i className="fa-solid fa-chevron-up"></i>
                    ) : (
                      <i className="fa-solid fa-chevron-down"></i>
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden mt-2 sm:mt-3 ml-4 sm:ml-10 text-gray-300 text-xs sm:text-sm md:text-base"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        className="bg-white border-t border-gray-200 py-6 px-4 sm:px-8 md:px-12"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm md:text-base text-gray-600 text-center sm:text-left">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            © 2025 Video Max
          </motion.p>

          <motion.img
            src="/images/replay.png"
            alt="Logo"
            url="Hero.jsx"
            className="w-26 h-16 sm:w-60 sm:h-20 md:w-24 cursor-pointer  md:h-34 lg:w-28 lg:h-28 object-contain"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6, type: 'spring' }}
          />

          <motion.div
            className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-red-600"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-red-600"
            >
              Terms Of Services
            </button>
            <button
              onClick={() => setModalType('contact')}
              className="hover:text-red-600"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </motion.footer>

      {/* Modal */}
      <AnimatePresence>
        {modalType && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl border border-red-100 max-w-2xl w-full sm:w-[90%] p-5 sm:p-8 max-h-[80vh] overflow-y-auto"
              initial={{ y: 60, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 60, opacity: 0, scale: 0.9 }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 300,
                duration: 0.4,
              }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 rounded-t-2xl"></div>

              {/* Close button */}
              <motion.button
                onClick={() => setModalType(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-600 text-lg sm:text-xl"
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✖
              </motion.button>

              {/* Modal content */}
              <motion.div
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {modalType === 'privacy' && (
                  <>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-gray-800">
                      Privacy Policy
                    </h2>
                    <div className="text-gray-600 text-xs sm:text-sm md:text-base space-y-3">
                      <p>
                        We do not collect personal data. By using this tool, you
                        agree that downloads are for personal use only.
                      </p>
                    </div>
                  </>
                )}

                {modalType === 'terms' && (
                  <>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-gray-800">
                      Terms of Services
                    </h2>
                    <div className="text-gray-600 text-xs sm:text-sm md:text-base space-y-3">
                      <p>
                        By using Video Max, you agree to comply with copyright
                        laws and only download content you are legally allowed
                        to.
                      </p>
                      <p>
                        We are not responsible for misuse. The service may be
                        discontinued or changed at any time.
                      </p>
                    </div>
                  </>
                )}

                {modalType === 'contact' && (
                  <>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-gray-800">
                      Contact Us
                    </h2>
                    <div className="text-gray-600 text-xs sm:text-sm md:text-base space-y-4">
                      <p>
                        For inquiries or business, please reach out using the
                        email below.
                      </p>

                      <motion.div
                        className="flex flex-col sm:flex-row sm:items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200 shadow-inner"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="flex items-center gap-3">
                          <Mail className="text-red-600 w-4 h-4 sm:w-5 sm:h-5" />
                          <a
                            href={`mailto:${EMAIL}`}
                            className="text-blue-600 hover:underline break-all text-xs sm:text-sm md:text-base"
                          >
                            {EMAIL}
                          </a>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 ml-0 sm:ml-auto">
                          <button
                            onClick={openGmailCompose}
                            className="px-3 py-1 rounded-md bg-white border text-xs sm:text-sm hover:bg-gray-100 transition"
                          >
                            Gmail
                          </button>
                          <button
                            onClick={openOutlookWebCompose}
                            className="px-3 py-1 rounded-md bg-white border text-xs sm:text-sm hover:bg-gray-100 transition"
                          >
                            Outlook
                          </button>
                          <button
                            onClick={copyEmail}
                            className="px-3 py-1 rounded-md bg-white border text-xs sm:text-sm hover:bg-gray-100 transition"
                          >
                            {copied ? '✅ Copied!' : 'Copy'}
                          </button>
                        </div>
                      </motion.div>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
