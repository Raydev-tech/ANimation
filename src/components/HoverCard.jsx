import { motion } from "framer-motion";

export default function HoverCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-gray-900 text-white p-8 rounded-xl w-64 text-center shadow-lg cursor-pointer"
    >
      <h3 className="text-xl font-semibold mb-2">Hover Animation</h3>
      <p className="text-sm text-gray-300">
        Smooth interactive hover effect using Framer Motion
      </p>
    </motion.div>
  );
}
