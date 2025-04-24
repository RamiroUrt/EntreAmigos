import { motion } from "framer-motion";

const MateLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-radial-green">
      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.path
          d="M30 70 Q50 90 70 70 Q80 50 60 30 L40 30 Q20 50 30 70 Z"
          fill="none"
          stroke="#BFDCA8"
          strokeWidth="5"
          strokeLinejoin="round"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M50 15 L70 -5"
          fill="none"
          stroke="#BFDCA8"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut"}}
        />
      </motion.svg>
    </div>
  );
};

export default MateLoader;
