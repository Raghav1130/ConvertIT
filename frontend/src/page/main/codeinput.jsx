import React from "react";
import { motion } from "framer-motion";

const CodeInput = ({ code, setCode }) => {

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full md:w-auto"
    >
      <div className="flex mt-6 md:mt-10">

        <div className="
          w-full
          h-[45vh]
          md:h-[60vh]
          md:w-[40vw]
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
              w-full
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