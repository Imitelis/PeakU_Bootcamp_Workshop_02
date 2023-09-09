import { useLocation } from "react-router-dom";

const PlanCard = ({ plan }) => {
  const location = useLocation();
  const isHome = location.pathname === "/home" || location.pathname === "/";
  const isPlans = location.pathname === "/plans";

  if (isHome) {
    return (
      <div className="bg-none hover:bg-white h-90 rounded-lg shadow-md overflow-hidden z-0 w-100 group">
        <div className="relative overflow-hidden flex items-center justify-center flex-col w-100 h-80 rounded-lg">
          <div className="w-full h-full">
            <img
              src={plan.plan_image}
              alt={plan.plan_image}
              className="object-cover group-hover:opacity-80"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <a
              className="text-xl px-3 py-2 bg-orange-500 hover:bg-orange-400 text-white shadow-md rounded-md hidden group-hover:block"
              href="/plans"
            >
              {plan.available ? "Book now" : "Out of stock"}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 flex items-center gap-1 mt-4 ml-2 px-2">
            <p className="text-2xl font-semibold mb-2">{plan.city}</p>
          </div>
          <div className="col-span-1 flex items-center gap-1 mt-4 ml-26 pl-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="#fcd34d"
              className="bi bi-star-fill"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <div className="text-gray-600 text-lg">{plan.rated}</div>
          </div>
          <div className="col-span-1 flex items-center gap-1 mb-2 ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 48 48"
              fill="#9ca3af"
              className="bi bi-star-fill"
            >
              <path d="M23.4236 41.8172C23.424 41.8174 23.4243 41.8176 24 41L23.4236 41.8172ZM24.5764 41.8172L24.58 41.8146L24.5891 41.8082L24.6209 41.7854C24.6482 41.7658 24.6875 41.7374 24.7379 41.7004C24.8387 41.6263 24.9842 41.5178 25.1681 41.3765C25.5357 41.0938 26.0571 40.6794 26.6811 40.1459C27.9277 39.08 29.5908 37.5328 31.2565 35.6059C34.5639 31.7799 38 26.3195 38 20.0769C38 16.3454 36.5264 12.7655 33.9016 10.1251C31.2765 7.48454 27.7149 6 24 6C20.2851 6 16.7235 7.48454 14.0984 10.1251C11.4736 12.7655 10 16.3454 10 20.0769C10 26.3195 13.4361 31.7799 16.7435 35.6059C18.4092 37.5328 20.0723 39.08 21.3189 40.1459C21.9429 40.6794 22.4643 41.0938 22.8319 41.3765C23.0158 41.5178 23.1613 41.6263 23.2621 41.7004C23.3125 41.7374 23.3518 41.7658 23.3791 41.7854L23.4109 41.8082L23.42 41.8146L23.4236 41.8172C23.7689 42.0603 24.2311 42.0603 24.5764 41.8172ZM24 41L24.5764 41.8172C24.576 41.8174 24.5757 41.8176 24 41ZM29 20C29 22.7614 26.7614 25 24 25C21.2386 25 19 22.7614 19 20C19 17.2386 21.2386 15 24 15C26.7614 15 29 17.2386 29 20Z" />
            </svg>
            <div className="text-gray-500 text-lg flex-grow overflow-hidden">
              {plan.country}
            </div>
          </div>
          <div className="col-span-1 flex items-center gap-1 ml-4 mb-2 px-2">
            <p className="text-gray-500 line-through">${plan.price}</p>
            <p className="text-orange-500 bg-orange-100 rounded-md p-0.5">
              ${plan.discount}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (isPlans) {
    return (
      <div className="bg-none hover:bg-white h-90 rounded-lg shadow-md overflow-hidden z-0 group">
        <div className="relative overflow-hidden flex items-center justify-center flex-col w-100 h-60 rounded-lg">
          <div className="w-full h-full">
            <img
              src={plan.plan_image}
              alt={plan.plan_image}
              className="object-cover group-hover:opacity-80"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <a
              className="text-xl px-3 py-2 bg-orange-500 hover:bg-orange-400 text-white shadow-md rounded-md hidden group-hover:block"
              href="/plans"
            >
              {plan.available ? "Book now" : "Out of stock"}
            </a>
          </div>
        </div>

        <p className="text-gray-600 p-2 pb-0">{plan.description}</p>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 flex items-center gap-1 mt-8 ml-2 px-2">
            <p className="text-2xl font-semibold mb-2">{plan.city}</p>
          </div>
          <div className="col-span-1 flex items-center gap-1 mt-8 ml-16 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="#fcd34d"
              className="bi bi-star-fill"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <div className="text-gray-600 text-lg">{plan.rated}</div>
          </div>
          <div className="col-span-1 flex items-center gap-1 mt-0 mb-4 ml-2 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 48 48"
              fill="#9ca3af"
              className="bi bi-star-fill"
            >
              <path d="M23.4236 41.8172C23.424 41.8174 23.4243 41.8176 24 41L23.4236 41.8172ZM24.5764 41.8172L24.58 41.8146L24.5891 41.8082L24.6209 41.7854C24.6482 41.7658 24.6875 41.7374 24.7379 41.7004C24.8387 41.6263 24.9842 41.5178 25.1681 41.3765C25.5357 41.0938 26.0571 40.6794 26.6811 40.1459C27.9277 39.08 29.5908 37.5328 31.2565 35.6059C34.5639 31.7799 38 26.3195 38 20.0769C38 16.3454 36.5264 12.7655 33.9016 10.1251C31.2765 7.48454 27.7149 6 24 6C20.2851 6 16.7235 7.48454 14.0984 10.1251C11.4736 12.7655 10 16.3454 10 20.0769C10 26.3195 13.4361 31.7799 16.7435 35.6059C18.4092 37.5328 20.0723 39.08 21.3189 40.1459C21.9429 40.6794 22.4643 41.0938 22.8319 41.3765C23.0158 41.5178 23.1613 41.6263 23.2621 41.7004C23.3125 41.7374 23.3518 41.7658 23.3791 41.7854L23.4109 41.8082L23.42 41.8146L23.4236 41.8172C23.7689 42.0603 24.2311 42.0603 24.5764 41.8172ZM24 41L24.5764 41.8172C24.576 41.8174 24.5757 41.8176 24 41ZM29 20C29 22.7614 26.7614 25 24 25C21.2386 25 19 22.7614 19 20C19 17.2386 21.2386 15 24 15C26.7614 15 29 17.2386 29 20Z" />
            </svg>
            <div className="text-gray-500 text-lg flex-grow overflow-hidden">
              {plan.country}
            </div>
          </div>
          <div className="col-span-1 flex items-center gap-1 ml-8 mb-4 px-2">
            <p className="text-gray-500 line-through">${plan.price}</p>
            <p className="text-orange-500 bg-orange-100 rounded-md p-0.5">
              ${plan.discount}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default PlanCard;
