import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose, title, content }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal box */}
          <motion.div style={{ fontFamily: "'JetBrains Mono', monospace" }}

            className="bg-white rounded-xl shadow-lg max-w-2xl w-[90%] p-6 sm:p-8 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
            <div className="text-gray-600 text-sm sm:text-base space-y-3 max-h-[60vh] overflow-y-auto">
              {content}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
