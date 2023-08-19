// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import PlanList from "./components/PlanList";

const App = () => {
  
  /*
  const projectMatch = useMatch("/projects/:id");

  const projectInfo = projectMatch
  ? projectsData.find((project) => project.id === Number(projectMatch.params.id))
  : null;
  */

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <NavigationBar />
      <Home />
    </div>
  );
};

/*
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plans" element={<PlanList />} />
      </Routes>
*/

export default App;