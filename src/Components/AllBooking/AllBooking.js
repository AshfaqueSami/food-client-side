import React from "react";

const AllBooking = (props) => {
  const { _id, bookingName, date, place, phone, name, email, status } =
    props.allBooking;
  const { ApproveBtn, DeleteBtn } = props;
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10"></div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{name}</div>
            <div className="text-sm text-gray-500">{email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{bookingName}</div>
        <div className="text-sm text-gray-500">{place}</div>
        <div className="text-sm text-gray-500">{phone}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={
            status == "Pending"
              ? "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-700"
              : "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
          }
        >
          {status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {date}
      </td>
      <td className="flex justify-center gap-3 px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          onClick={() => ApproveBtn(_id)}
          className="text-indigo-600 hover:text-indigo-900"
        >
          Approve
        </button>
        <button
          onClick={() => DeleteBtn(_id)}
          className="flex items-center gap-2 text-white bg-red-600 py-2 px-3 rounded-xl hover:bg-red-700"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default AllBooking;
