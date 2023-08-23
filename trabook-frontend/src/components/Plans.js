import React, { useState } from 'react';

import PlanCard from "./PlanCard";

const Plans = ({ plans }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlans = plans
    .filter(plan => plan.city.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => b.rated - a.rated);

  return (
    <div className="bg-orange-50 z-0 w-full mt-20">
      <div className="flex justify-center">
        <div className="col-span-2 flex flex-col justify-center pt-0 pb-16">
          <span className="text-center">
            <p className="text-5xl font-serif font-bold text-black mt-8">
              <span className="text-orange-500">Plan</span> your destination
            </p>
            <p className="text-lg text-gray-500 mt-4 mb-4">
              Embark on your thrilling adventure with us by planning your
              destination.
            </p>
          </span>

          <input
        type="text"
        placeholder="Search by city"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

          <div className="grid 2xl:grid-cols-4 lg:grid-cols-2 gap-8 px-36 my-4">
          {filteredPlans.map(plan => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
