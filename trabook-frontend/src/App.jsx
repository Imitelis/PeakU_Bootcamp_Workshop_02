import { useState, useEffect } from "react";
import { Routes, Route, useMatch } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import Plans from "./components/Plans";
import Tours from "./components/Tours";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

import planService from "./services/plans";
import tourService from "./services/tours";
import blogService from "./services/blogs";

const App = () => {
  const [plans, setPlans] = useState([]);
  const [tours, setTours] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const blogMatch = useMatch("/blogs/:id");

  const blogInfo = blogMatch
    ? blogs.find((blog) => blog.id === Number(blogMatch.params.id))
    : null;

  useEffect(() => {
    planService.getAll().then((initialPlans) => {
      setPlans(initialPlans);
    });
    tourService.getAll().then((initialTours) => {
      setTours(initialTours);
    });
    blogService.getAll().then((initialBlogs) => {
      setBlogs(initialBlogs);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <NavigationBar blogs={blogs} />
      <Routes>
        <Route
          path="/"
          element={<Home plans={plans} tours={tours} blogs={blogs} />}
        />
        <Route
          path="/home"
          element={<Home plans={plans} tours={tours} blogs={blogs} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/plans" element={<Plans plans={plans} />} />
        <Route path="/tours" element={<Tours tours={tours} />} />
        <Route path="/blogs" element={<Blogs blogs={blogs} />} />
        <Route path="/blogs/:id" element={<Blog blogInfo={blogInfo} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

/*
      
        */
