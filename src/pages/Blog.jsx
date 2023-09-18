import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { motion as m } from "framer-motion";

export default function Blog() {
  const links = [
    {
      text: "HOME",
      link: "/",
    },
  ];

  return (
    <>
      <m.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="  flex justify-center backgroundStylesGrid bg-black"
      >
        <div className="bg-black h-screen w-screen max-w-[100rem]">
          <div className=" top-0 left-0 w-full  ">
            <Navbar links={links} />
          </div>
          <div className="flex justify-center mt-[6rem]">
            <div className="absolute">
              <SearchBar />
            </div>
          </div>
          <div className="">
            <h1 className="text-white text-5xl font-bold text-center mt-[10rem]">
              <span className="text-xl">Bear Digital Studios</span> <br /> Blog
            </h1>
          </div>
          <div className=" mt-[10rem]">
            <BlogCard />
          </div>
        </div>
      </m.main>
    </>
  );
}
