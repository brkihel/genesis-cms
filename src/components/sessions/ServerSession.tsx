import GenesisLogo from "../../images/genesis-logo.png";

interface ServerSessionProps {
  setPage: (page: string) => void;
}

const ServerSession: React.FC<ServerSessionProps> = ({ setPage }) => {
  return (
    <>
      <div className="dl-head-session">
        <div className="dl-border"></div>
        <div className="dl-content dl-head-img relative">
          <div className="dl-head-overlay flex flex-col justify-center items-center p-12">
            <h1 className="text-2xl font-extrabold uppercase text-center mb-4">
              PAGE UNDER DEVELOPMENT!
            </h1>
            <img
              className="h-24 w-auto"
              src={GenesisLogo.src}
              alt="Genesis Logo"
            />
            <h1>404! NOT FOUND</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServerSession;
