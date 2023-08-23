import traveler from "../misc/traveler.png";
import todo_01 from "../misc/todo_01.png";
import todo_02 from "../misc/todo_02.png";
import todo_03 from "../misc/todo_03.png";
import planes_01 from "../misc/planes_01.png";

const Home = () => {
  return (
    <div className="bg-orange-50 z-0 w-full mt-20">
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-0 py-2">
          <div className="col-span-1 pl-48 pr-20 justify-center items-center">
            <p className="text-6xl font-bold text-black font-serif mt-20">
              Get started your exciting{" "}
              <span className="text-orange-500">journey</span> with us.
            </p>
            <p className="text-lg mt-10 text-gray-500">
              A Team of experienced tourism professionals will provide you with
              the best advice and tips for your desire place.
            </p>
            <a
              className="btn btn-icon text-md mt-16 px-8 py-2 bg-slate-50 text-orange-500 hover:bg-orange-500 hover:text-white border-2 border-orange-500 shadow-md rounded-md"
              href="/plans"
            >
              Discover now
            </a>
          </div>

          <div className="col-span-1 ml-12 pb-12 px-12 justify-center items-center">
            <div className="w-auto h-auto absolute overflow-hidden rounded-full">
              <img
                src={traveler}
                alt="traveler"
                title="Traveler"
                className="object-containz-2"
              />
              <div
                className="absolute inset-0 bg-orange-500"
                style={{
                  clipPath: "polygon(0 100%, 100% 100%, 100% 50%, 0 50%)",
                  zIndex: -1,
                }}
              ></div>
            </div>
          </div>

          <div className="col-span-2 flex justify-center mt-8 mb-8 py-24">
            <div className="grid grid-cols-4 gap-2 relative bg-slate-50 rounded-lg border p-4">
              <div className="flex items-center">
                <span className="mr-2">
                  <p className="text-lg text-black">Location</p>
                  <p className="text-xs text-gray-500">Where are you going</p>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#f59e0b"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 mb-4"
                >
                  <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              <div className="flex items-center">
                <span className="mr-2">
                  <p className="text-lg text-black">Date</p>
                  <p className="text-xs text-gray-500">When you will go</p>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#f59e0b"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 mb-4"
                >
                  <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              <div className="flex items-center">
                <span className="mr-2">
                  <p className="text-lg text-black">Guest</p>
                  <p className="text-xs text-gray-500">Number of guest</p>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#f59e0b"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 mb-4"
                >
                  <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              <button className="text-md px-10 py-2 bg-orange-500 hover:bg-orange-400 text-white shadow-md rounded-md">
                Explore now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-2 flex flex-col justify-center pt-16 mb-0 bg-gray-100">
        <span className="text-center">
          <p className="text-5xl font-serif font-bold text-black mt-8">
            Things you need <span className="text-orange-500">to do</span>
          </p>
          <p className="text-lg text-gray-500 mt-4 mb-4">
            We ensure that you'll embark on a perfectly planned, <br /> safe
            vacation at a price you can afford.
          </p>
          <img
            src={planes_01}
            alt="planes_01"
            title="Planes"
            className="relative inline-block mb-0 top-[-9rem] left-[22rem]"
          />
        </span>

        <div className="grid grid-cols-3 gap-4 px-60 mt-8 mb-0 relative inline-block top-[-9rem]">
          <div className="bg-white shadow-md p-4 rounded-lg">
            <img
              src={todo_01}
              alt="todo_01"
              title="ToDo"
              className="object-containz-2 p-2"
            />
            <h2 className="text-2xl font-semibold pt-4">Sign Up</h2>
            <p className="text-gray-600 pt-2">
              Sign Up Completes all the work associated with planning and
              processing
            </p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg">
            <img
              src={todo_02}
              alt="todo_01"
              title="ToDo"
              className="object-containz-2 p-2"
            />
            <h2 className="text-2xl font-semibold pt-4">Worth of Money</h2>
            <p className="text-gray-600 pt-2">
              After successful access then book from exclusive deals & pricing
            </p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg">
            <img
              src={todo_03}
              alt="todo_01"
              title="ToDo"
              className="object-containz-2 p-2"
            />
            <h2 className="text-2xl font-semibold pt-4">Exciting Travel</h2>
            <p className="text-gray-600 pt-2">
              Start and explore a wide range of exciting travel experience
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-2 flex flex-col justify-center py-16 bg-orange-50">
        <span className="text-center">
          <p className="text-5xl font-serif font-bold text-black mt-8">
            Exclusive <span className="text-orange-500">deals & discounts</span>
          </p>
          <p className="text-lg text-gray-500 mt-4 mb-4">
            Discover our fantastic early booking discounts <br /> & start
            planning your journey.
          </p>
        </span>

        <div className="grid grid-cols-4 gap-4 px-60 my-8">
          <div className="bg-white shadow-md p-4 rounded-lg">
            <img
              src={todo_01}
              alt="todo_01"
              title="todo_01"
              className="object-containz-2 p-2"
            />
            <h2 className="text-2xl font-semibold pt-4">Sign Up</h2>
            <p className="text-gray-600 pt-2">
              Sign Up Completes all the work associated with planning and
              processing
            </p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg">
            <img
              src={todo_02}
              alt="todo_01"
              title="todo_01"
              className="object-containz-2 p-2"
            />
            <h2 className="text-2xl font-semibold pt-4">Worth of Money</h2>
            <p className="text-gray-600 pt-2">
              After successful access then book from exclusive deals & pricing
            </p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg">
            <img
              src={todo_03}
              alt="todo_01"
              title="todo_01"
              className="object-containz-2 p-2"
            />
            <h2 className="text-2xl font-semibold pt-4">Exciting Travel</h2>
            <p className="text-gray-600 pt-2">
              Start and explore a wide range of exciting travel experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
