import logo from "../misc/logo.png";

const Footer = () => {
  return (
    <div className="footer bg-gray-100 h-40 flex items-center justify-between fixed top-0 z-10 w-full">
      <div className="navbar-brand ml-36 w-30 h-auto" id="logo">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            title="Trabook"
            className="w-full h-auto"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
