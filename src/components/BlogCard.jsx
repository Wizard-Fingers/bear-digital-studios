import { motion } from "framer-motion";

export default function BlogCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="bg-white  shadow-lg p-4 max-w-md border-l-8 border-Blue"
    >
      <h2 className="text-xl font-semibold mb-2">Blog Post Title</h2>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        augue vitae libero faucibus eleifend.
      </p>
      <div className="mt-4">
        <button className="px-4 py-2 bg-black text-white ">Read More</button>
      </div>
    </motion.div>
  );
}
