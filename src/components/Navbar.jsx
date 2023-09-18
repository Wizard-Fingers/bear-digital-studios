import Socials from "./Socials";
import { motion as m } from "framer-motion";
function Navbar({ links }) {
  // styles
  //   const styles = {};

  return (
    <>
      <m.nav
        initial={{ x: -500 }}
        animate={{ x: 0, transition: { delay: 1.5 } }}
        transition={{ duration: 3 }}
        className="lg:absolute text-white"
      >
        {links.map((linkItem, index) => (
          <a key={index} href={linkItem.link}>
            <h3 className="ml-6 lg:ml-0 text-3xl font-bold mt-2 lg:hover:scale-110 lg:hover:pt-1 lg:transition-all lg:hover:text-Blue lg:duration-400">
              {linkItem.text}
            </h3>
          </a>
        ))}
        <div className="hidden lg:flex w-[10rem] h-3 bg-white mt-2" />
        <div className="  lg:w-[5rem] w-[8rem] h-2 bg-Blue mt-2" />
      </m.nav>
      <Socials />
    </>
  );
}

export default Navbar;
