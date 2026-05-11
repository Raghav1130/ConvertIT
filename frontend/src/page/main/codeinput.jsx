import React from "react";
import { motion } from "framer-motion";

const CodeInput = ({ code, setCode }) => {

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex mt-10">

        <div className="
          h-[60vh]
          bg-black/30
          backdrop-blur-md
          border border-white/20
          rounded-2xl
          shadow-xl
          p-4
        ">

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Paste your code here..."
            spellCheck={false}
            className="
              w-[40vw]
              h-full
              bg-transparent
              outline-none
              resize-none
              text-sm
              font-mono
              font-semibold
              text-white
            "
          />

        </div>

      </div>
    </motion.div>
  );
};

export default CodeInput;