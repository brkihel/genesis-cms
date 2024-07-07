"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CttBox,
  MainContainer,
  MainNavigationMenu,
  HomeSession,
  LoginForm,
  RegisterForm,
  DownloadSession,
  ServerSession,
} from "../components";

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "100vw",
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.8,
};

const App: React.FC = () => {
  const [page, setPage] = useState<string>("home");

  return (
    <>
      <MainContainer>
        <MainNavigationMenu setPage={setPage} />
        <CttBox>
          <AnimatePresence mode="wait">
            {page === "home" && (
              <motion.div
                key="home"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <HomeSession setPage={setPage} />
              </motion.div>
            )}
            {page === "login" && (
              <motion.div
                key="login"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <LoginForm setPage={setPage} />
              </motion.div>
            )}
            {page === "register" && (
              <motion.div
                key="register"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <RegisterForm setPage={setPage} />
              </motion.div>
            )}
            {page === "downloads" && (
              <motion.div
                key="downloads"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <DownloadSession setPage={setPage} />
              </motion.div>
            )}
            {page === "server" && (
              <motion.div
                key="server"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <ServerSession setPage={setPage} />
              </motion.div>
            )}
          </AnimatePresence>
        </CttBox>
      </MainContainer>
    </>
  );
};

export default App;
