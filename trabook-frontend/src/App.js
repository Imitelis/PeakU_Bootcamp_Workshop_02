import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import Plans from "./components/Plans";
import NotFound from "./components/NotFound";


import planService from "./services/plans";

const App = () => {
  const [plans, setPlans] = useState([]);

  /*
  const projectMatch = useMatch("/projects/:id");

  const projectInfo = projectMatch
  ? projectsData.find((project) => project.id === Number(projectMatch.params.id))
  : null;
  */

  useEffect(() => {
    planService.getAll().then((initialPlans) => {
      setPlans(initialPlans);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plans" element={<Plans plans={plans} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

/*

*/

export default App;
