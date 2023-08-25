import { useState } from "react";

import traveler from "../misc/traveler_full.png";
import todo_01 from "../misc/todo_01.png";
import todo_02 from "../misc/todo_02.png";
import todo_03 from "../misc/todo_03.png";
import planes_01 from "../misc/planes_01.png";
import planes_02 from "../misc/planes_02.png";
import trees_01 from "../misc/trees_01.png";

import PlanCard from "./PlanCard";
import TourCard from "./TourCard";
import BlogCard from "./BlogCard";

const Home = ({ plans, tours, blogs }) => {
  const [plansSliceStart, setPlansSliceStart] = useState(0);
  const [plansSliceEnd, setPlansSliceEnd] = useState(4);
  const [toursSliceStart, setToursSliceStart] = useState(0);
  const [toursSliceEnd, setToursSliceEnd] = useState(3);
  const [blogsSliceStart, setBlogsSliceStart] = useState(0);
  const [blogsSliceEnd, setBlogsSliceEnd] = useState(4);
  const [review, setReview] = useState(0);

  plans.sort((a, b) => b.rated - a.rated);
  tours.sort((a, b) => b.rated - a.rated);
  blogs.sort((a, b) => b.published_date - a.published_date);

  const handleLeftPlans = () => {
    setPlansSliceStart(Math.max(0, plansSliceStart - 4));
    setPlansSliceEnd(Math.max(4, plansSliceEnd - 4));
  };

  const handleRightPlans = () => {
    setPlansSliceStart(Math.min(plans.length - 4, plansSliceStart + 4));
    setPlansSliceEnd(Math.min(plans.length, plansSliceEnd + 4));
  };

  const handleLeftTours = () => {
    setToursSliceStart(Math.max(0, toursSliceStart - 3));
    setToursSliceEnd(Math.max(3, toursSliceEnd - 3));
  };

  const handleRightTours = () => {
    setToursSliceStart(Math.min(tours.length - 3, toursSliceStart + 3));
    setToursSliceEnd(Math.min(tours.length, toursSliceEnd + 3));
  };

  const handleLeftBlogs = () => {
    setBlogsSliceStart(Math.max(0, blogsSliceStart - 4));
    setBlogsSliceEnd(Math.max(4, blogsSliceEnd - 4));
  };

  const handleRightBlogs = () => {
    setBlogsSliceStart(Math.min(blogs.length - 4, blogsSliceStart + 4));
    setBlogsSliceEnd(Math.min(blogs.length, blogsSliceEnd + 4));
  };

  const reviewsData = [
    {
      picture:
        "https://i.cbc.ca/1.4988866.1548197767!/fileImage/httpImage/pamela-fieber.jpg",
      quote:
        "Thanks to this travel agency, my visit to Bilbao was seamless. The agency's attention to detail, from arranging museum tickets to suggesting local eateries, made my exploration of the Guggenheim's architectural marvel.",
      name: "Olivia Tremblay",
      location: "Calgary, Canaday",
    },
    {
      picture:
        "https://media.istockphoto.com/id/476586916/photo/portrait-of-a-swedish-real-man.jpg?s=612x612&w=0&k=20&c=zFOdAgxUGemfEOTw5hpCHH3YFov-XtCyLlKD1jtUgdw=",
      quote:
        "This travel agency curated an exhilarating escapade to Ushuaia. Their coordination of thrilling outdoor activities and awe-inspiring landscapes made for an unforgettable adventure at the southernmost tip of the world.",
      name: "Arne Henriksen",
      location: "Aarhus, Denmark",
    },
    {
      picture:
        "https://content.api.news/v3/images/bin/cf78e2fa2254a43879b91571a79a446d",
      quote:
        "This travel agency orchestrated an invigorating expedition to Puerto Montt. Their seamless arrangement of exciting outdoor ventures and breathtaking landscapes created an indelible journey on the shores of this destination.",
      name: "Svetlana Kuznetsov",
      location: "Kazan, Russia",
    },
    {
      picture:
        "https://media.npr.org/assets/news/2009/11/24/herbivore-c7c9aa4baeb1c313bf08ab0ea831bcec8826d668.jpg",
      quote:
        "My voyage to Bologna, organized by this travel agency, was a culinary revelation. From the renowned tortellini to the enchanting cityscape, every moment was a feast for the senses.",
      name: "Katashi Ogasaka",
      location: "Sapporo, Japan",
    },
  ];

  const handleLeftReview = () => {
    setReview((review - 1 + reviewsData.length) % reviewsData.length);
  };

  const handleRightReview = () => {
    setReview((review + 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <div className="bg-orange-50 z-0 w-full mt-20 min-h-screen">
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-0 py-2">
          <div className="col-span-1 pl-48 pr-20 justify-center items-center">
            <p className="text-6xl font-bold text-black font-serif mt-20">
              Get started your exciting
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

          <div className="col-span-1 ml-6 pl-0 pr-24 pb-12 pt-4 justify-center items-center">
            <div className="w-auto h-auto mr-24 absolute overflow-hidden">
              <img
                src={traveler}
                alt="traveler"
                title="Traveler"
                className="object-containz-2"
              />
            </div>
          </div>

          <div className="col-span-2 flex justify-center mt-4 mb-4 py-24">
            <div className="grid grid-cols-4 gap-2 relative bg-slate-50 rounded-lg border px-3 py-4">
              <div className="flex items-center">
                <span className="mr-2">
                  <select class="bg-gray-50 p-2 rounded-md text-lg text-black caret-red-200">
                    <option value="" disabled selected>
                      Location
                    </option>
                    <option value="spain">Spain</option>
                    <option value="italy">Italy</option>
                    <option value="france">France</option>
                    <option value="greece">Greece</option>
                    <option value="turkey">Turkey</option>
                  </select>
                  <p className="text-xs text-gray-500">Where are you going</p>
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">
                  <select class="bg-gray-50 p-2 rounded-md text-lg text-black caret-red-200">
                    <option value="" disabled selected>
                      Date
                    </option>
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                    <option value="fall">Fall</option>
                    <option value="winter">Winter</option>
                  </select>
                  <p className="text-xs text-gray-500">When you will go</p>
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">
                  <select class="bg-gray-50 p-2 rounded-md text-lg text-black caret-red-200">
                    <option value="" disabled selected>
                      Guest
                    </option>
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    <option value="five">+4</option>
                  </select>
                  <p className="text-xs text-gray-500">Number of guest</p>
                </span>
              </div>
              <a
                className="btn btn-icon text-md px-10 py-2 mt-2 bg-orange-500 hover:bg-orange-400 text-white shadow-md rounded-md"
                href="/tours"
              >
                Explore now
              </a>
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

        <div className="grid 2xl:grid-cols-4 lg:grid-cols-2 gap-8 px-60 my-4 mb-16">
          {plans.slice(plansSliceStart, plansSliceEnd).map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mt-4 mb-8">
          <button
            className="text-md px-2 py-2 text-gray-400 border-2 border-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 shadow-md rounded-full"
            onClick={handleLeftPlans}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-arrow-left-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
              />
            </svg>
          </button>
          <button
            className="text-md px-2 py-2 text-gray-400 border-2 border-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 shadow-md rounded-full"
            onClick={handleRightPlans}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="col-span-2 flex flex-col justify-center py-24 bg-orange-50">
        <span className="text-center mb-3">
          <p className="text-5xl font-serif font-bold text-black mt-8">
            Best <span className="text-orange-500">vacation plan</span>
          </p>
          <p className="text-lg text-gray-500 mt-4 mb-0">
            Plan your perfect vacation with our travel agency. Choose <br />
            among hundreds of all-inclusive offers!
          </p>
          <img
            src={trees_01}
            alt="trees_01"
            title="Trees"
            className="relative inline-block mb-0 top-[-9rem] left-[18rem]"
          />
        </span>

        <div className="flex justify-between w-20 gap-3 relative mb-0 top-[-5rem] left-[78rem]">
          <button
            className="text-md px-2 py-2 text-gray-400 border-2 border-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 shadow-md rounded-full"
            onClick={handleLeftTours}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-arrow-left-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
              />
            </svg>
          </button>
          <button
            className="text-md px-2 py-2 text-gray-400 border-2 border-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 shadow-md rounded-full"
            onClick={handleRightTours}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </button>
        </div>

        <div className="grid 2xl:grid-cols-3 lg:grid-cols-1 gap-8 px-60 mt-0 mb-16 relative inline-block mb-0 top-[-3rem] mb-4">
          {tours.slice(toursSliceStart, toursSliceEnd).map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-0 py-36 w-100 px-36 bg-gray-100">
        <div className="col-span-1 pl-24 justify-center items-center">
          <p className="text-5xl font-serif font-bold text-black mt-8">
            What people say <br />
            <span className="text-orange-500">about us.</span>
          </p>
          <p className="text-lg text-gray-500 mt-4 mb-4">
            Our Clients send us bunch of smiles with our services <br />
            and we love them.
          </p>
          <span className="flex items-center gap-4">
            <button
              className="text-md px-2 py-2 text-gray-400 border-2 border-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 shadow-md rounded-full"
              onClick={handleLeftReview}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-arrow-left-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                />
              </svg>
            </button>
            <button
              className="text-md px-2 py-2 text-gray-400 border-2 border-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 shadow-md rounded-full"
              onClick={handleRightReview}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </button>
          </span>
        </div>

        <div className="col-span-1 px-2 mr-24 py-9 justify-center items-center relative">
          {reviewsData.map((reviewData, index) => (
            <div key={index}>
              {review === index && (
                <img
                  src={reviewData.picture}
                  alt={reviewData.name}
                  title={reviewData.name}
                  className="object-cover rounded-full w-20 h-20 absolute -top-4 -left-9 z-10"
                />
              )}
            </div>
          ))}

          <div className="w-auto h-auto absolute overflow-hidden">
            <span className="text-center">
              {reviewsData.map((reviewData, index) => (
                <div key={index}>
                  {review === index && (
                    <div className="bg-white shadow-md p-4 rounded-lg relative">
                      <div className="flex flex-col gap-1">
                        <p className="text-gray-600 text-lg text-left ml-4">
                          "{reviewData.quote}"
                        </p>
                        <h2 className="text-2xl font-semibold text-left ml-4">
                          {reviewData.name}
                        </h2>
                        <h2 className="text-xl text-left ml-4">
                          {reviewData.location}
                        </h2>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </span>
          </div>
          <img
            src={planes_02}
            alt="planes_02"
            title="Planes"
            className="relative inline-block mb-0 top-[-8rem] left-[27rem]"
          />
        </div>
      </div>

      <div className="col-span-2 flex flex-col justify-center pt-16 pb-48 bg-orange-50">
        <span className="text-center">
          <p className="text-5xl font-serif font-bold text-black mt-8 mb-3">
            Get update with <span className="text-orange-500">latest blog</span>
          </p>
        </span>

        <div className="grid 2xl:grid-cols-4 lg:grid-cols-2 gap-12 px-28 my-4 mb-16">
          {blogs.slice(blogsSliceStart, blogsSliceEnd).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mt-4 mb-8">
          <button
            className="px-2 py-2 bg-gray-100 border hover:bg-orange-500 hover:border-orange-500 rounded-full"
            onClick={handleLeftBlogs}
          ></button>
          <button
            className="px-2 py-2 bg-gray-100 border hover:bg-orange-500 hover:border-orange-500 rounded-full"
            onClick={handleRightBlogs}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Home;
