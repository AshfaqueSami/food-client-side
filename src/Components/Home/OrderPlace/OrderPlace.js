import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const OrderPlace = () => {
  const [packages, setPackages] = useState([]);
  const { id } = useParams();
  const { user } = useAuth();
  const history = useHistory();
  const numbRef = useRef();
  const dateRef = useRef();
  const placeRef = useRef();
  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  const singlePackages = packages.find((item) => item._id == id);
  const handlebookingBtn = (e) => {
    const booking = {
      name: user?.displayName,
      email: user?.email,
      date: dateRef.current.value,
      phone: numbRef.current.value,
      place: placeRef.current.value,
      bookingName: singlePackages?.title,
      bookingImg: singlePackages?.image,
      status: "Pending",
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("You just booked this package.You are welcome.");
          if (alert) {
            history.push("/bookings");
          }
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container lg:flex justify-between gap-24 px-5  mx-auto items-center">
          <div>
            <div className="flex justify-center">
              <img width="600px" src={singlePackages?.image} alt="" />
            </div>
            <div>
              <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                <h2 className="text-4xl font-bold text-red-500">
                  {singlePackages?.title}
                </h2>
                <p className="dark:text-coolGray-400">
                  {singlePackages?.description}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <form
              onSubmit={handlebookingBtn}
              className=" bg-gray-100 rounded-lg px-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
            >
              <h2 className="font-bold text-gray-900 text-lg font-medium title-font mb-5">
                Book This Package
              </h2>
              <div className="relative mb-4">
                <label
                  for="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={user.displayName}
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={user.email}
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Phone
                </label>
                <input
                  ref={numbRef}
                  type="number"
                  id="number"
                  name="number"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="phone number"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Date
                </label>
                <input
                  ref={dateRef}
                  type="date"
                  id="date"
                  name="date"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="journey date"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Place
                </label>
                <input
                  ref={placeRef}
                  type="text"
                  id="place"
                  name="place"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="event place"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-red-400 border-0 py-2 px-8 focus:outline-none hover:bg-red-500 rounded text-lg"
              >
                Book
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderPlace;
