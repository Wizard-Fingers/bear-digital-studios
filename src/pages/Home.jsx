import Navbar from "../components/Navbar";
import { motion as m } from "framer-motion";
function Home() {
  const links = [
    {
      text: "BLOG",
      link: "/blog",
    },
  ];

  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="flex justify-center backgroundStylesGrid bg-black"
    >
      <div className="bg-black h-screen w-screen max-w-[100rem]">
        <Navbar links={links} />
      </div>
    </m.main>
  );
}

export default Home;
