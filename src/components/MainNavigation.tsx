import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface MainNavigationMenuProps {
  setPage: (page: string) => void;
}

const MainNavigationMenu: React.FC<MainNavigationMenuProps> = ({ setPage }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const btn = document.getElementById("menuButton");
    const menu = document.getElementById("menuBtnList");

    if (btn && menu) {
      const toggleMenu = () => {
        menu.classList.toggle("hidden");
      };

      btn.addEventListener("click", toggleMenu);

      // Cleanup function to remove event listener
      return () => {
        btn.removeEventListener("click", toggleMenu);
      };
    }
  }, []);

  return (
    <>
      <nav className="relative flex flex-wrap items-center content-between py-3 px-4 bg-transparent border-4 border-transparent border-dashed border-image-source url(../images/border2.png) border-image-slice-20 border-image-repeat-repeat navbar-custom">
        <div className="flex-grow hidden md:block items-center">
          <ul className="flex flex-wrap list-reset pl-0 mb-0 w-full justify-around">
            {["home", "wiki", "server", "downloads", "donate"].map(
              (page, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="mr-4"
                >
                  <li>
                    <a
                      onClick={() => setPage(page)}
                      href="#"
                      className="nav-link inline-block py-2 px-4 no-underline text-orange-400 hover:text-orange-500 transition-colors duration-300 uppercase"
                    >
                      {page.charAt(0).toUpperCase() + page.slice(1)}
                    </a>
                  </li>
                </motion.div>
              )
            )}
            {!isLoggedIn ? (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mr-4"
              >
                <li>
                  <a
                    onClick={() => setPage("login")}
                    href="#"
                    className="nav-link inline-block py-2 px-4 no-underline text-orange-400 hover:text-orange-500 transition-colors duration-300 uppercase"
                  >
                    Login
                  </a>
                </li>
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mr-4"
              >
                <li>
                  <a
                    href="#"
                    className="nav-link inline-block py-2 px-4 no-underline text-orange-400 hover:text-orange-500 transition-colors duration-300 uppercase"
                  >
                    Logout
                  </a>
                </li>
              </motion.div>
            )}
          </ul>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-multi-level"
            aria-expanded="false"
            id="menuButton"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div id="menuBtnList" className="hidden md:hidden w-full">
          <ul className="flex flex-col items-start list-reset pl-0 mb-0">
            {["home", "wiki", "server", "downloads", "donate"].map(
              (page, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-full mb-2"
                >
                  <li className="w-full">
                    <a
                      onClick={() => setPage(page)}
                      href="#"
                      className="nav-link block py-2 px-4 no-underline text-orange-400 hover:text-orange-500 transition-colors duration-300 uppercase w-full"
                    >
                      {page.charAt(0).toUpperCase() + page.slice(1)}
                    </a>
                  </li>
                </motion.div>
              )
            )}
            {!isLoggedIn ? (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-full mb-2"
              >
                <li className="w-full">
                  <a
                    onClick={() => setPage("login")}
                    href="#"
                    className="nav-link block py-2 px-4 no-underline text-orange-400 hover:text-orange-500 transition-colors duration-300 uppercase w-full"
                  >
                    Login
                  </a>
                </li>
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-full mb-2"
              >
                <li className="w-full">
                  <a
                    href="#"
                    className="nav-link block py-2 px-4 no-underline text-orange-400 hover:text-orange-500 transition-colors duration-300 uppercase w-full"
                  >
                    Logout
                  </a>
                </li>
              </motion.div>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MainNavigationMenu;
