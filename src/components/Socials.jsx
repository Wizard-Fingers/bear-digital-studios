import { useState } from "react";
import { motion as m } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Socials() {
  // links
  const links = [
    {
      text: "facebook",
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/",
    },
    {
      text: "linkedin",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/",
    },
    {
      text: "email",
      icon: <FaEnvelope />,
      link: "mailto:art.b.beckett@gmail.com",
    },
  ];

  // logic
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const iconVariants = {
    hidden: { opacity: 0, y: -100 }, // Move icons off-screen initially
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <m.div
        initial={{ y: -500 }}
        animate={{
          y: 0,
          transition: { delay: 1.0 },
        }}
        transition={{ duration: 2.5 }}
      >
        {/* lg and up */}
        <ul className="text-white font-bold hidden lg:flex justify-center w-full gap-6 lg:gap-12 mt-0">
          {links.map((link, index) => (
            <m.li
              key={link.text}
              className="flex flex-col items-center pt-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:text-Blue hover:scale-110  transition-all duration-400"
              >
                <m.span
                  variants={iconVariants}
                  initial="hidden"
                  animate={hoveredIndex === index ? "visible" : "hidden"}
                  className="text-2xl lg:text-4xl "
                >
                  {link.icon}
                </m.span>
                <m.span
                  className={`text-sm lg:text-base ${
                    hoveredIndex === index ? "scale-110" : ""
                  }`}
                >
                  {link.text}
                </m.span>
              </a>
            </m.li>
          ))}
        </ul>
        {/* sm - md */}
        <ul className="lg:hidden text-white flex justify-end gap-8 text-2xl mt-4 mr-4">
          {links.map((link) => (
            <li key={link.text}>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        <div className="w-full h-3 bg-white mt-4 lg:hidden" />
      </m.div>
    </>
  );
}
