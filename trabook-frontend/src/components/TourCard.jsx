const TourCard = ({ tour }) => {
  return (
    <div className="bg-none hover:bg-white h-120 rounded-lg shadow-md overflow-hidden z-0 w-100 group">
      <div className="relative overflow-hidden flex items-center justify-center flex-col w-100 h-90 rounded-lg">
        <div className="w-100 h-100">
          <div
            className="object-cover group-hover:opacity-80"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={tour.tour_image}
              alt={tour.tour_image}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
          <a
            className="text-xl px-3 py-2 bg-orange-500 hover:bg-orange-400 text-white shadow-md rounded-md hidden group-hover:block"
            href="/tours"
          >
            {tour.available ? "Book now" : "Out of stock"}
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 flex items-center gap-1 mt-2 ml-2 px-2">
          <p className="text-xl font-semibold mb-0 truncate">
            {tour.city}, {tour.country}
          </p>
        </div>
        <div className="col-span-1 flex items-center mt-2 ml-6 pl-12">
          <p className="text-2xl font-bold text-orange-500">
            ${Number(tour.price).toLocaleString()}k
          </p>
        </div>
        <div className="col-span-1 flex items-center gap-1 mb-2 ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 448 512"
            fill="#f97316"
            className="bi bi-star-fill"
          >
            <path d="M285.6 444.1C279.8 458.3 264.8 466.3 249.8 463.4C234.8 460.4 223.1 447.3 223.1 432V256H47.1C32.71 256 19.55 245.2 16.6 230.2C13.65 215.2 21.73 200.2 35.88 194.4L387.9 50.38C399.8 45.5 413.5 48.26 422.6 57.37C431.7 66.49 434.5 80.19 429.6 92.12L285.6 444.1z" />
          </svg>
          <div className="text-gray-500 text-lg flex-grow overflow-hidden">
            {tour.days < 10 ? 0 + String(tour.days) : tour.days} Days Trip
          </div>
        </div>
        <div className="col-span-1 flex items-center gap-1 ml-24 mb-2 px-2">
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
          <div className="text-gray-600 text-lg">{tour.rated}</div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
