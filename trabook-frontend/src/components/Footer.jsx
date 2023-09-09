import logo from "../misc/logo.png";
import trees_02 from "../misc/trees_02.png";
import circles from "../misc/circles.png";

const Footer = () => {
  return (
    <div className="relative bg-gray-100 bottom-0 z-1 w-full px-60">
      <div className="relative inline-block mb-0 top-[-8rem] left-[0rem] w-90 h-80 bg-orange-500 rounded-2xl overflow-hidden flex flex-col justify-center items-center">
        <h2 className="text-white text-5xl font-serif text-center mt-64 pt-4">
          Subscribe and get exclusive <br />
          deals & offer
        </h2>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            className="relative h-8 inline-block mb-0 top-[1.3rem] left-[1.75rem] z-20"
            fill="#6b7280"
            viewBox="0 0 32 32"
          >
            <path d="M32 6v20c0 1.135-0.865 2-2 2h-2v-18.151l-12 8.62-12-8.62v18.151h-2c-1.135 0-2-0.865-2-2v-20c0-0.568 0.214-1.068 0.573-1.422 0.359-0.365 0.859-0.578 1.427-0.578h0.667l13.333 9.667 13.333-9.667h0.667c0.568 0 1.068 0.214 1.427 0.578 0.359 0.354 0.573 0.854 0.573 1.422z" />
          </svg>
          <input
            placeholder="Enter your email"
            className="relative my-4 mx-0 pr-80 pl-8 py-2 w-100 rounded-md border border-gray-400 z-10"
          />
          <button className="relative h-8 inline-block mb-0 top-[1.35rem] left-[-5.65rem] text-md py-1 px-2 bg-orange-500 hover:bg-orange-400 text-white shadow-md rounded-md z-20">
            Subscribe
          </button>
        </div>
        <img
          src={trees_02}
          alt="trees_02"
          title="Trees"
          className="relative inline-block mb-0 top-[-13rem] left-[31rem] h-30 w-auto"
        />
        <img
          src={circles}
          alt="circles"
          title="Circles"
          className="relative inline-block mb-0 top-[-16rem] left-[-24rem] h-60 w-auto"
        />
      </div>

      <div className="grid grid-cols-2 w-100 items-center justify-between border-b-2 pt-0">
        <div className="col-span-1 flex flex-col mb-16">
          <div className="flex items-start">
            <img
              src={logo}
              alt="logo"
              title="Trabook"
              className="w-30 h-auto mb-2"
            />
          </div>
          <div className="flex items-start">
            <p className="text-gray-500 text-sm mb-6">
              Book your trip in minutes, get a <br />
              complete travel experience.
            </p>
          </div>
          <div className="flex items-start w-40 gap-3">
            <div className="w-1/3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-icon btn-md p-2 bg-slate-50 shadow-md rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-facebook text-lg"></i>
              </a>
            </div>
            <div className="w-1/3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-icon btn-md p-2 bg-slate-50 shadow-md rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
            </div>
            <div className="w-1/3">
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-icon btn-md p-2 bg-slate-50 shadow-md rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-twitter text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex items-center justify-between">
          <div className="w-1/3 mb-8">
            <h3 className="font-semibold mb-6">Company</h3>
            <div className="gap-4">
              <a
                className="block text-md text-gray-500 hover:text-orange-500 mb-2"
                href="/"
              >
                About
              </a>
              <a
                className="block text-md text-gray-500 hover:text-orange-500 mb-2"
                href="/"
              >
                Careers
              </a>
              <a
                className="block text-md text-gray-500 hover:text-orange-500 mb-2"
                href="/"
              >
                Logistics
              </a>
              <a
                className="block text-md text-gray-500 hover:text-orange-500 mb-2"
                href="/"
              >
                Privacy & Policy
              </a>
            </div>
          </div>

          <div className="w-1/3 mb-16">
            <h3 className="font-semibold mb-6">Contact</h3>
            <div className="gap-4">
              <a
                className="block text-md text-gray-500 hover:text-orange-500 mb-2"
                href="/"
              >
                Help/FAQ
              </a>
              <a
                className="block text-md text-gray-500 hover:text-orange-500 mb-2"
                href="/"
              >
                Press
              </a>
              <a
                className="block text-md text-gray-500 hover:text-orange-500 mb-2"
                href="/"
              >
                Affiliates
              </a>
            </div>
          </div>

          <div className="w-1/3 mb-16">
            <h3 className="font-semibold mb-6">More</h3>
            <div className="gap-4">
              <a
                className="block text-md text-gray-500 hover:text-orange-500 mb-2"
                href="/"
              >
                Press Center
              </a>
              <a
                className="block text-md text-gray-500 hover:text-orange-500 mb-2"
                href="/"
              >
                Our Blog
              </a>
              <a
                className="block text-md text-gray-500 hover:text-orange-500 mb-2"
                href="/"
              >
                Low fare tips
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 w-full">
        <div className="col-span-1 mt-4 mb-8 flex justify-start">
          <p className="text-md text-gray-500">
            Copyright, Trabook 2022. All rights reserved.
          </p>
        </div>
        <div className="col-span-1 mt-4 mb-8 flex justify-end">
          <p className="text-md text-gray-500">Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
