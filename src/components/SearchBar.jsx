// src/components/SearchBar.js

import { motion as m } from "framer-motion";

export default function SearchBar() {
  return (
    <>
      <m.div
        initial={{ x: -2000 }}
        animate={{ x: 0, transition: { delay: 1.5 } }}
        transition={{ duration: 3 }}
        className="flex space-x-2 bg-white text-black p-2 "
      >
        <input
          type="text"
          className="bg-transparent  text-black outline-none "
        />
        <div className="border-l-4  border-Blue  ">
          <button className="bg-white ml-2 text-center text-black font-bold text-2xl cursor-pointer ">
            search
          </button>
        </div>
      </m.div>
      <m.div
        initial={{ x: -2000 }}
        animate={{ x: 0, transition: { delay: 2 } }}
        transition={{ duration: 3 }}
        className="w-[14rem] h-2 bg-Blue mt-2"
      />
    </>
  );
}
