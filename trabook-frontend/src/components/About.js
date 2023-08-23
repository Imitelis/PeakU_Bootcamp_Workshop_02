import todo_01 from "../misc/todo_01.png";
import todo_02 from "../misc/todo_02.png";
import todo_03 from "../misc/todo_03.png";
import planes_01 from "../misc/trees_01.png";

const About = () => {
  return (
    <div className="bg-orange-50 z-0 w-full mt-20">

      <div className="col-span-2 flex flex-col justify-center pt-16 mb-0 bg-orange-50">
        <span className="text-center">
          <p className="text-5xl font-serif font-bold text-black mt-8">
            About <span className="text-orange-500">us</span>
          </p>
          <p className="text-lg text-gray-500 mt-4 mb-4">
          We are passionate about exploring the globe, connecting cultures, and creating memories that last a lifetime. <br/> Our mission is to provide you with unparalleled travel opportunities that inspire, enrich, and rejuvenate.
          </p>
          <img
            src={planes_01}
            alt="planes_01"
            title="Planes"
            className="relative inline-block mb-0 top-[-10rem] left-[12rem]"
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
            <h2 className="text-2xl font-semibold pt-4">Our Mission</h2>
            <p className="text-gray-600 pt-2">
            Our mission began with a shared love for travel and a vision to bring the wonders of the world closer to you.
            </p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg">
            <img
              src={todo_02}
              alt="todo_01"
              title="ToDo"
              className="object-containz-2 p-2"
            />
            <h2 className="text-2xl font-semibold pt-4">Who we are</h2>
            <p className="text-gray-600 pt-2">
            We're a community of passionate adventurers who are dedicated to making your travel experiences exceptional.
            </p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg">
            <img
              src={todo_03}
              alt="todo_01"
              title="ToDo"
              className="object-containz-2 p-2"
            />
            <h2 className="text-2xl font-semibold pt-4">Personalized</h2>
            <p className="text-gray-600 pt-2">
            We specialize in creating tailor-made experiences that cater to your preferences, interests, and travel style.
            </p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg">
            <img
              src={todo_03}
              alt="todo_01"
              title="ToDo"
              className="object-containz-2 p-2"
            />
            <h2 className="text-2xl font-semibold pt-4">Planned</h2>
            <p className="text-gray-600 pt-2">
            With a deep love for exploration, our team are dedicated to ensuring that your travel experience exceeds all expectations.
            </p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg">
            <img
              src={todo_03}
              alt="todo_01"
              title="ToDo"
              className="object-containz-2 p-2"
            />
            <h2 className="text-2xl font-semibold pt-4">Sustainable</h2>
            <p className="text-gray-600 pt-2">
            Through partnerships with local initiatives, we aim to contribute to the preservation of natural landscapes and well-being.
            </p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg">
            <img
              src={todo_03}
              alt="todo_01"
              title="ToDo"
              className="object-containz-2 p-2"
            />
            <h2 className="text-2xl font-semibold pt-4">Your Journey</h2>
            <p className="text-gray-600 pt-2">
            Whether you're a seasoned traveler or venturing abroad for a first time, Trabook is here to make your travel a reality.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
