"use client";

import React from "react";

// Definindo a interface para as propriedades do componente
interface CttBoxProps {
  children: React.ReactNode;
}

// Atualizando o componente para TypeScript
const CttBox: React.FC<CttBoxProps> = (props) => {
  return (
    <div className="content-container">
      <div className="cttArea lg:max-w-60">{props.children}</div>
    </div>
  );
};

export default CttBox;
