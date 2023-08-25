const BlogCard = ({ blog }) => {
  return (
    <div className="bg-none hover:bg-white h-120 rounded-lg shadow-md overflow-hidden z-0 w-80 group">
      <div className="relative overflow-hidden flex items-center justify-center flex-col w-100 h-90 rounded-lg">
        <div className="w-100 h-80">
          <div
            className="object-cover group-hover:opacity-80"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img
              src={blog.blog_image}
              alt={blog.blog_image}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
          <a
            className="text-xl px-3 py-2 bg-orange-500 hover:bg-orange-400 text-white shadow-md rounded-md hidden group-hover:block"
            href={`/blogs/${blog.id}`}
          >
            See more
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="col-span-1 flex items-center gap-1 mt-2 ml-2 px-2">
          <p className="text-xl font-semibold mb-0" style={{ height: "1.5em" }}>
            {blog.title}
          </p>
        </div>
        <div className="col-span-1 flex items-center gap-1 mb-2 ml-2 mt-6 px-2">
          <p className="text-lg text-gray-500 mb-0">{blog.published_date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
