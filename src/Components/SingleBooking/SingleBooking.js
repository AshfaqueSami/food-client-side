import React from "react";

const SingleBooking = (props) => {
  const { date, place, bookingName, bookingImg, status, _id } = props.booking;
  const { DeleteBtn } = props;
  return (
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <img alt="" src={bookingImg} />
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <span
          class={
            status == "Pending"
              ? "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-700"
              : "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
          }
        >
          {status}
        </span>
        <h2 class="text-red-500 text-lg title-font font-medium mb-2">
          {bookingName}
        </h2>
        <p class="leading-relaxed text-sm">
          Event date : {date} <br />
          Event place : {place} <br />
        </p>
        <button
          onClick={() => DeleteBtn(_id)}
          class="mt-3 bg-red-600 text-white inline-flex items-center px-4 py-2 rounded-full gap-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleBooking;
