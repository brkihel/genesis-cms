"use client";

import authFormImage from "../../images/auth-form-sm.webp";
import AuthInput from "../AuthInput";
import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

interface LoginFormProps {
  setPage: (page: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ setPage }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/auth/login", { username, password })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-wrap ">
      <div className="md:w-1/2 pr-4 pl-4 form-image">
        <img src={authFormImage.src} alt="" />
      </div>
      <div className="md:w-1/2 pr-4 pl-4 auth-form">
        <form onSubmit={(e) => handleLogin(e)}>
          <AuthInput placeholder="Nome de usuário:" newState={setUsername} />
          <AuthInput placeholder="Senha:" newState={setPassword} isPassword />
          <div className="form-buttons flex justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => handleLogin(e)}
              className="rounded py-1 px-3 btn"
            >
              Entrar
            </motion.button>
          </div>
          <br />
          <br />
          <p>
            Não tem uma conta ainda?{" "}
            <a href="#" onClick={() => setPage("register")}>
              REGISTRAR
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
