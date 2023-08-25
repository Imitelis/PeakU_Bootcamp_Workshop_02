import trees_01 from "../misc/trees_01.png";

const About = () => {
  return (
    <div className="bg-orange-50 z-0 w-full mt-20 min-h-screen">
      <div className="col-span-2 flex flex-col justify-center pb-48 mb-0 bg-orange-50">
        <span className="text-center">
          <p className="text-5xl font-serif font-bold text-black mt-8">
            About <span className="text-orange-500">us</span>
          </p>
          <p className="text-lg text-gray-500 mt-4 mb-4">
            We are passionate about exploring the globe, connecting cultures,
            and creating memories that last a lifetime. <br /> Our mission is to
            provide you with unparalleled travel opportunities that inspire,
            enrich, and rejuvenate.
          </p>
          <img
            src={trees_01}
            alt="trees_01"
            title="Trees"
            className="relative inline-block mb-0 top-[-10rem] left-[12rem]"
          />
        </span>

        <div className="grid grid-cols-3 gap-4 px-60 mt-24 mb-0 relative inline-block top-[-9rem]">
          <div className="bg-white shadow-md p-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="globe-search"
              width="57"
              height="57"
              viewBox="0 0 24 24"
              fill="#f97316"
            >
              <path d="M19.3,16.9c0.4-0.7,0.7-1.5,0.7-2.4c0-2.5-2-4.5-4.5-4.5S11,12,11,14.5s2,4.5,4.5,4.5c0.9,0,1.7-0.3,2.4-0.7l3.2,3.2 l1.4-1.4L19.3,16.9z M15.5,17c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S16.9,17,15.5,17z M12,20v2 C6.48,22,2,17.52,2,12C2,6.48,6.48,2,12,2c4.84,0,8.87,3.44,9.8,8h-2.07c-0.64-2.46-2.4-4.47-4.73-5.41V5c0,1.1-0.9,2-2,2h-2v2 c0,0.55-0.45,1-1,1H8v2h2v3H9l-4.79-4.79C4.08,10.79,4,11.38,4,12C4,16.41,7.59,20,12,20z" />
            </svg>
            <h2 className="text-2xl font-semibold pt-4">Our Mission</h2>
            <p className="text-gray-600 pt-2">
              Our mission began with a shared love for travel and a vision to
              bring the wonders of the world closer to you.
            </p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="plane-inflight"
              width="57"
              height="57"
              viewBox="0 0 24 24"
              fill="white"
              strokeWidth="2"
              stroke="#f97316"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 11.085h5a2 2 0 1 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3l4 7z" />
              <path d="M3 21h18" />
            </svg>
            <h2 className="text-2xl font-semibold pt-4">Your Journey</h2>
            <p className="text-gray-600 pt-2">
              Whether you're a seasoned traveler or venturing abroad for a first
              time, Trabook is here to make your travel a reality.
            </p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="person-globe"
              width="57"
              height="57"
              viewBox="0 0 24 24"
              fill="#f97316"
            >
              <path d="M22.17 9.17c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H6v-3h1v-4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4h1v5h16v-2h-3v-3.88c3.47-.41 6.17-3.36 6.17-6.95zM4.5 11c.83 0 1.5-.67 1.5-1.5S5.33 8 4.5 8 3 8.67 3 9.5 3.67 11 4.5 11z" />
            </svg>
            <h2 className="text-2xl font-semibold pt-4">Who we are</h2>
            <p className="text-gray-600 pt-2">
              We're a community of passionate adventurers who are dedicated to
              making your travel experiences exceptional.
            </p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="case-person"
              width="57"
              height="57"
              viewBox="0 0 48 48"
              fill="white"
            >
              <path
                d="M35 9.5C35 11.433 33.433 13 31.5 13C29.567 13 28 11.433 28 9.5C28 7.567 29.567 6 31.5 6C33.433 6 35 7.567 35 9.5Z"
                fill="#f97316"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.5 11C32.3284 11 33 10.3284 33 9.5C33 8.67157 32.3284 8 31.5 8C30.6716 8 30 8.67157 30 9.5C30 10.3284 30.6716 11 31.5 11ZM31.5 13C33.433 13 35 11.433 35 9.5C35 7.567 33.433 6 31.5 6C29.567 6 28 7.567 28 9.5C28 11.433 29.567 13 31.5 13Z"
                fill="#f97316"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 16C17.8954 16 17 16.8954 17 18C17 19.1046 17.8954 20 19 20H26V40C26 41.1046 26.8954 42 28 42C29.1046 42 30 41.1046 30 40V31H33V40C33 41.1046 33.8954 42 35 42C36.1046 42 37 41.1046 37 40V27.917C39.8377 27.441 42 24.973 42 22C42 18.6863 39.3137 16 36 16H19ZM39 22C39 20.8954 38.1046 20 37 20V24C38.1046 24 39 23.1046 39 22Z"
                fill="#f97316"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 32C6 30.8954 6.89543 30 8 30H21C22.1046 30 23 30.8954 23 32V40C23 41.1046 22.1046 42 21 42H8C6.89543 42 6 41.1046 6 40V32ZM10 39V33H12V39H10ZM17 33V39H19V33H17Z"
                fill="#f97316"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 28C11 26.8954 11.8954 26 13 26H16C17.1046 26 18 26.8954 18 28V30H16V28H13V30H11V28Z"
                fill="#f97316"
              />
            </svg>
            <h2 className="text-2xl font-semibold pt-4">Planned</h2>
            <p className="text-gray-600 pt-2">
              With a deep love for exploration, our team are dedicated to
              ensuring that your travel experience exceeds all expectations.
            </p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="plant"
              width="57"
              height="57"
              version="1.1"
              viewBox="0 0 16 16"
              fill="white"
              stroke="#f97316"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="m8.75 6.75c0 1.25-.75 3-.75 3m.25-2.5s.75-2-1-3.5-4.5-1-4.5-1 0 2 1.5 3.5 4 1 4 1zm.5-1s-.75-2 1-3.5 4.5-1 4.5-1 0 2-1.5 3.5-4 1-4 1z" />
              <path d="m4.75 9.75h6.5s.5 4.5-3.25 4.5-3.25-4.5-3.25-4.5z" />
            </svg>
            <h2 className="text-2xl font-semibold pt-4">Sustainable</h2>
            <p className="text-gray-600 pt-2">
              Through partnerships with local initiatives, we aim to contribute
              to the preservation of natural landscapes and well-being.
            </p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="case"
              width="57"
              height="57"
              viewBox="0 0 20 20"
              fill="#f97316"
            >
              <path d="M14 5h2v14H4V5h2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1zm3 0h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V5zM3 5v14H2a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h1zm5-1v1h4V4H8z" />
            </svg>
            <h2 className="text-2xl font-semibold pt-4">Personalized</h2>
            <p className="text-gray-600 pt-2">
              We specialize in creating tailor-made experiences that cater to
              your preferences, interests, and travel style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
