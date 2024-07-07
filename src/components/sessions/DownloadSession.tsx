import React from "react";
import GenesisLogo from "../../images/genesis-logo.png";
import DlWindows from "../../images/dl1-6689ad617c89e.webp";
import DlMacos from "../../images/dl3.jpg";
import { motion } from "framer-motion";

interface DownloadSession {
  setPage: (page: string) => void;
}

const downloads = [
  {
    title: "Genesis Azeroth Client Windows",
    description: "Download do client para sistemas operacionais Windows.",
    imgSrc: DlWindows,
    downloadLink: "URL_PARA_DOWNLOAD_WINDOWS_CLIENT",
  },
  {
    title: "Genesis Azeroth Client Mac",
    description:
      "Download do client para sistemas operacionais MacOS(Indisponível).",
    imgSrc: DlMacos,
    downloadLink: "URL_PARA_DOWNLOAD_MAC_CLIENT",
  },
  // Adicione mais itens conforme necessário
];

const DownloadSession: React.FC<DownloadSession> = ({ setPage }) => {
  return (
    <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
      <div className="dl-head-session">
        <div className="dl-border"></div>
        <div className="dl-content dl-head-img relative">
          <div className="dl-head-overlay flex justify-between items-center p-6">
            <div>
              <h1 className="text-2xl font-extrabold uppercase">
                Faça o download do client Genesis Azeroth
              </h1>
              <p className="mt-2 text-m">
                Selecione o client específico para o seu sistema operacional.
              </p>
            </div>
            <img className="h-24 w-auto" src={GenesisLogo.src} alt="" />
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {downloads.map((item, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              className="h-60 w-full object-cover"
              src={item.imgSrc.src}
              alt={item.title}
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="rounded py-1 px-3 btn"
              >
                Download
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadSession;
