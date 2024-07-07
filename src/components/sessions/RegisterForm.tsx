"use client";

import authFormImage from "../../images/auth-form-sm.webp";
import AuthInput from "../AuthInput";
import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

interface RegisterFormProps {
  setPage: (page: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ setPage }) => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleRegister = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/auth/register", {
        email,
        username,
        password,
        confirmPassword,
      })
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
        <form onSubmit={handleRegister}>
          <AuthInput placeholder="Email" newState={setEmail} />
          <AuthInput placeholder="Nome de usuário" newState={setUsername} />
          <AuthInput placeholder="Senha" newState={setPassword} isPassword />
          <AuthInput
            placeholder="Confirme a senha"
            newState={setConfirmPassword}
            isPassword
          />
          <div className="form-buttons flex justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => handleRegister(e)}
              className="rounded py-1 px-3 btn"
            >
              Registrar
            </motion.button>
          </div>
          <br />
          <br />
          <p>
            Já possui uma conta?{" "}
            <a href="#" onClick={() => setPage("login")}>
              Entrar
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
