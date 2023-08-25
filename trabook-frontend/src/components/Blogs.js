import React, { useState } from "react";

import BlogCard from "./BlogCard";

const Blogs = ({ blogs }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogs
    .filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((a, b) => b.published_date - a.published_date);

  return (
    <div className="bg-orange-50 z-0 w-full mt-20 pb-48 min-h-screen">
      <div className="flex justify-center">
        <div className="col-span-2 flex flex-col justify-center pt-0 pb-16">
          <span className="text-center">
            <p className="text-5xl font-serif font-bold text-black mt-8">
              Check our <span className="text-orange-500">blog</span>
            </p>
            <p className="text-lg text-gray-500 mt-4 mb-4">
              Immerse yourself as you navigate through the pages of this blog.
            </p>
          </span>

          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#f97316"
              className="bi bi-search mt-2 mx-1"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by title"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-10 w-50 ml-2 border rounded-md p-3 mb-4"
            />
          </div>

          <div className="grid 2xl:grid-cols-3 lg:grid-cols-1 gap-8 px-48 my-4">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {filteredBlogs.length === 0 ? (
            <div className="flex justify-center text-gray-500 text-lg px-36 w-100">
              None found.
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
