import NotFound from "./NotFound";

const BlogView = ({ blogInfo }) => {
  if (!blogInfo || blogInfo === null || blogInfo === undefined) {
    return <NotFound />;
  }

  return (
    <div className="bg-orange-50 z-0 w-full mt-20 pb-48 min-h-screen">
      <div className="flex justify-center">
        <div className="col-span-2 flex flex-col items-center pt-0 pb-16">
          <p className="text-5xl font-serif font-bold text-black mt-8 text-center">
            {blogInfo.title}
          </p>
          <p className="text-3xl text-gray-500 mt-4 mb-4">
            by: <span className="text-orange-500">{blogInfo.author}</span>
          </p>
          <img
            src={blogInfo.blog_image}
            alt={blogInfo.blog_image}
            style={{ objectFit: "cover", width: "40%", height: "auto" }}
            className="mt-4 mb-0 rounded-3xl"
          />
          <p className="text-lg text-gray-500 px-36 mt-6 mb-0 text-center">
            {blogInfo.text}
          </p>
          <p className="text-2xl text-gray-500 px-36 mt-6 mb-0 text-center">
            <span className="text-orange-500">{blogInfo.published_date}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
