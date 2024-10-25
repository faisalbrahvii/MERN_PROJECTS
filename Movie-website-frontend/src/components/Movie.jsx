import React from 'react';
import { FaEye, FaStar } from 'react-icons/fa6';
import { FaHeart } from "react-icons/fa";
import { Movies } from '../Data/data.js';

const Movie = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-9 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
      {Movies.map((items, id) => {
        return (
          <div
            key={id}
            className="text-white p-2 border border-gray-700 rounded-lg bg-gray-800 w-full max-w-xs mx-auto transition-transform duration-300 hover:scale-105"
          >
            <img src={items.image} alt={items.name} className="w-full h-fit object-cover rounded-md" />
            <div className="p-2">
              <h1 className="font-bold text-lg sm:text-xl">{items.name}</h1>
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="text-sm sm:text-base">{items.year}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaHeart className="text-sm hover:text-yellow-500 transition-colors duration-200" />
                  <FaEye className="text-sm hover:text-yellow-500 transition-colors duration-200" />
                  <FaStar className="text-sm hover:text-yellow-500 transition-colors duration-200" />
                  <p className="text-sm sm:text-base">{items.rate}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
