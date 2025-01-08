import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "./../assets/logo.png";
import { navItems } from "../data/navItems";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-600/20 ">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-12 w-12 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight font-serif">LoveStory</span>
          </div>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden lg:flex ml-14 space-x-12 text-black"
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </motion.ul>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden lg:flex justify-center space-x-12 items-center"
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="py-2 px-3 border border-neutral-700 rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              Contact us
            </Link>
          </motion.div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="fixed right-0 z-20 bg-slate-100 w-full p-12 flex flex-col justify-center items-center lg:hidden text-center"
          >
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {navItems.map((item, index) => (
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  key={index}
                  className="py-4"
                >
                  <Link
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className=" cursor-pointer hover:text-blue-500 transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
