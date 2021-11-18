import React from "react";
import { useHistory } from "react-router-dom";

const Package = (props) => {
  const history = useHistory();
  const {title,image,description,_id} = props.booking;
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={image} alt="Mountain" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{title}</div>
        <p class="text-gray-700 text-base">
          {description}.....<span className="text-xs">read more</span>
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
      <button
          onClick={()=>history.push(`/orderPlace/${_id}`)}
          type="button"
          className="flex bg-red-400 items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md"
        >
          Book now
        </button>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #food
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #event
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #meal
        </span>
      </div>
    </div>
  );
};

export default Package;
