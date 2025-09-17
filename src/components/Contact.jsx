// src/components/Contact.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";

const EMAIL = "mbaezuechiemerie@outlook.com";

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
  const [modalType, setModalType] = useState(null); // "privacy" | "contact" | "terms"
  const [copied, setCopied] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const openGmailCompose = () => {
    const subject = encodeURIComponent("Inquiry about Video Max");
    const body = encodeURIComponent("Hi,\n\nI would like to ask about...");
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${subject}&body=${body}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const openOutlookWebCompose = () => {
    const subject = encodeURIComponent("Inquiry about Video Max");
    const body = encodeURIComponent("Hi,\n\nI would like to ask about...");
    const url = `https://outlook.live.com/owa/?path=/mail/action/compose&to=${EMAIL}&subject=${subject}&body=${body}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      alert("Unable to copy automatically. Please copy manually: " + EMAIL);
    }
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
          <h2 className="text-2xl sm:text-3xl font-light mb-8">
            Frequently{" "}
            <span className="font-bold text-red-600">Asked Questions</span>
          </h2>

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

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
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
            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-40 lg:h-16 object-contain"
          />

          <div className="flex gap-6">
            <button
              onClick={() => setModalType("privacy")}
              className="hover:text-red-600"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setModalType("terms")}
              className="hover:text-red-600"
            >
              Terms Of Services
            </button>
            <button
              onClick={() => setModalType("contact")}
              className="hover:text-red-600"
            >
              Contact Us
            </button>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {modalType && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl border border-red-100 max-w-2xl w-[90%] p-6 sm:p-8"
              initial={{ y: 60, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 60, opacity: 0, scale: 0.9 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                duration: 0.4,
              }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 rounded-t-2xl"></div>

              {/* Close button */}
              <motion.button
                onClick={() => setModalType(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-600 text-xl"
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✖
              </motion.button>

              {/* Modal content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {modalType === "privacy" && (
                  <>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">
                      Privacy Policy
                    </h2>
                    <div className="text-gray-600 text-sm sm:text-base space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                      <p>
                        Privacy Policy Last Updated: [17-12-2023] Thank you for
                        using our Free YouTube Downloader tool! This Privacy
                        Policy explains how we collect, use, disclose, and
                        safeguard your information when you use our website.
                        Information We Collect Personal Information: We do not
                        collect any personal information that identifies you
                        personally, such as your name, email address, or contact
                        details. Usage Information We may collect non-personal
                        information about your use of the Free YouTube
                        Downloader tool, including but not limited to the videos
                        you download, the type of device you use, and your
                        internet connection. How We Use Your Information We use
                        the information collected to: Improve and optimize the
                        performance of our Free YouTube Downloader tool. Analyze
                        user trends and preferences. Ensure compliance with our
                        Terms of Service. Information Sharing and Disclosure We
                        do not sell, trade, or otherwise transfer your
                        information to outside parties. Cookies and Tracking
                        Technologies Our website does not use cookies or any
                        tracking technologies to collect personal information.
                        Security We take reasonable measures to protect the
                        information we collect from unauthorized access or
                        disclosure. Third-Party Links Our website may contain
                        links to third-party websites. We are not responsible
                        for the privacy practices of these websites. Please read
                        the privacy policies of these third parties for more
                        information. Children's Privacy Our Free YouTube
                        Downloader tool is not intended for children under the
                        age of 13. We do not knowingly collect personal
                        information from children. Changes to This Privacy
                        Policy We reserve the right to update or change our
                        Privacy Policy at any time. The latest version will be
                        posted on this page, and the date of the last update
                        will be modified accordingl
                      </p>
                    </div>
                  </>
                )}

                {modalType === "terms" && (
                  <>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">
                      Terms of Services
                    </h2>
                    <div className="text-gray-600 text-sm sm:text-base space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                      <p>
                        By using Video Max, you agree to comply with all
                        applicable copyright laws and only download content you
                        have rights to.
                      </p>
                      <p>
                        We are not responsible for misuse of this tool. Users
                        accept full responsibility for the videos they download.
                      </p>
                      <p>
                        We reserve the right to modify or discontinue this
                        service at any time without prior notice.
                      </p>
                      <p>
                        If you need to reach us for legal or partnership
                        inquiries, please use the Contact modal or email us
                        directly.
                      </p>
                    </div>
                  </>
                )}

                {modalType === "contact" && (
                  <>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">
                      Contact Us
                    </h2>
                    <div className="text-gray-600 text-sm sm:text-base space-y-4">
                      <p>
                        If you have any questions or concerns regarding our
                        Downloader or Business Inquiries please contact us.
                      </p>

                      <motion.div
                        className="flex flex-col sm:flex-row sm:items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200 shadow-inner"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="flex items-center gap-3">
                          <Mail className="text-red-600 w-5 h-5" />
                          <a
                            href={`mailto:${EMAIL}`}
                            className="text-blue-600 hover:underline break-all"
                          >
                            {EMAIL}
                          </a>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 ml-0 sm:ml-auto">
                          <button
                            onClick={openGmailCompose}
                            className="px-3 py-1 rounded-md bg-white border text-sm hover:bg-gray-100 transition"
                          >
                            Gmail
                          </button>
                          <button
                            onClick={openOutlookWebCompose}
                            className="px-3 py-1 rounded-md bg-white border text-sm hover:bg-gray-100 transition"
                          >
                            Outlook
                          </button>
                          <button
                            onClick={copyEmail}
                            className="px-3 py-1 rounded-md bg-white border text-sm hover:bg-gray-100 transition"
                          >
                            {copied ? "✅ Copied!" : "Copy"}
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
