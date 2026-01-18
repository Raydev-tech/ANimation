import { motion } from "framer-motion";

export default function ScrollSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-52 bg-white p-10 rounded-xl shadow-md text-center"
    >
      <h3 className="text-xl font-semibold mb-2">Scroll Animation</h3>
      <p className="text-gray-600">
        This section animates into view on scroll
      </p>
    </motion.div>
  );
}
