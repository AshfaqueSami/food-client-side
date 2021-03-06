import React, { useEffect, useState } from "react";
import AllBooking from "../AllBooking/AllBooking";

const AllBookings = () => {
  const [allBookings, setAllBookings] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-peak-67091.herokuapp.com/allbookings")
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, []);
  const DeleteBtn = (id) => {
    const confirmLog = window.confirm("you want to delete this package?");
    if (confirmLog) {
      fetch(`https://cryptic-peak-67091.herokuapp.com/bookings?id=${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Removed successfully !");
            // const found = bookings.filter(booking=>booking._id!=id)
            const filtered = allBookings.filter((service) => service._id != id);
            setAllBookings(filtered);
          }
        });
    }
  };
  const ApproveBtn = (id) => {
    fetch(`https://cryptic-peak-67091.herokuapp.com/bookings?id=${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          const found = allBookings.find((item) => item._id == id);
          found.status = "Approved";
          const updatedBooking = [...allBookings];
          setAllBookings(updatedBooking);
        }
      });
  };
  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:mx-8 my-24">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-red-300">
                  <tr>
                    <th
                      scope="col"
                      className="text-center px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-center px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
                    >
                      Details
                    </th>
                    <th
                      scope="col"
                      className="text-center px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="text-center px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {allBookings.map((item) => (
                    <AllBooking
                      key={item._id}
                      allBooking={item}
                      DeleteBtn={DeleteBtn}
                      ApproveBtn={ApproveBtn}
                    ></AllBooking>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBookings;
