import React from 'react';

const FilterButtons = ({ setFilter }) => {
  return (
    <div className="mb-4">
      <button
        onClick={() => setFilter('all')}
        className="mr-2 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-all"
      >
        All
      </button>
      <button
        onClick={() => setFilter('active')}
        className="mr-2 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-all"
      >
        Active
      </button>
      <button
        onClick={() => setFilter('completed')}
        className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-all"
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;

