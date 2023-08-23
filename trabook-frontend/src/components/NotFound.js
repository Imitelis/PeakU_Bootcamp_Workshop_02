import todo_01 from "../misc/todo_01.png";
import todo_02 from "../misc/todo_02.png";
import todo_03 from "../misc/todo_03.png";
import planes_02 from "../misc/trees_02.png";

const NotFound = () => {
  return (
    <div className="bg-orange-50 z-0 w-full mt-20 min-h-screen">

      <div className="col-span-2 flex flex-col justify-center pt-16 mb-0 bg-orange-50">
        <span className="text-center">
          <p className="text-5xl font-serif font-bold text-black mt-8">
            Error <span className="text-orange-500">404</span>
          </p>
          <p className="text-lg text-gray-500 mt-4 mb-4">
            Page not found
          </p>
          <img
            src={planes_02}
            alt="planes_02"
            title="Trees"
            className="relative inline-block mb-0 top-[-10rem] left-[12rem]"
          />
        </span>

        <div className="grid grid-cols-1 gap-4 px-60 mt-8 mb-0 relative inline-block top-[-9rem]">
          <div className="bg-white shadow-md p-4 rounded-lg text-center flex items-center flex-column w-90">
          <svg width="120" height="120" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white"/><path d="M41 4H7C5.34315 4 4 5.34315 4 7V41C4 42.6569 5.34315 44 7 44H41C42.6569 44 44 42.6569 44 41V7C44 5.34315 42.6569 4 41 4Z" fill="white" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 32H44" stroke="#333" stroke-width="1" stroke-linecap="round"/><path d="M10 38H11" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M26 38H38" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 37V27" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 37V27" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <h2 className="text-2xl font-semibold pt-4">Url error</h2>
            <p className="text-gray-600 pt-2">
            Sorry, but the page that you are looking for doesn't exists.
            </p>
            <a className="text-md mt-12 px-10 py-2 bg-orange-500 hover:bg-orange-400 text-white shadow-md rounded-md w-40" href="/">
            Home
            </a>
          </div>

          

          

          
          

        </div>
      </div>

    </div>
  );
};

export default NotFound;
