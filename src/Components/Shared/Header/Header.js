import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div
      style={{
        backgroundColor: "#272937",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        margin: "20px",
        borderRadius: "20px",
        boxShadow: "3px 5px 10px 3px gray",
      }}
    >
      <section>
        <div className="container text-gray-300 mx-auto flex flex-col items-center px-4 md:px-10 xl:max-w-3xl">
          <div class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap py-4 flex-col md:flex-row items-center">
              <NavLink
                to="/"
                className="flex title-font font-medium items-center text-red-400 mb-4 md:mb-0"
              >
                <span class="ml-3 text-xl">delicioumo</span>
              </NavLink>
              <ul className="items-stretch text-gray-300 space-x-3 lg:mx-5 md:flex">
                {user?.email ? (
                  <>
                    <li className="">
                      <NavLink to="/bookings" class="mr-2 hover:text-red-400">
                        Bookings
                      </NavLink>
                    </li>
                    <li className="">
                      <NavLink
                        to="/allBookings"
                        class="mr-2 hover:text-red-400"
                      >
                        All Bookings
                      </NavLink>
                    </li>
                    <li className="">
                      <NavLink to="/addBooking" class="mr-1 hover:text-red-400">
                        Add Package
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <></>
                )}
                <li className="">
                  <NavLink to="/about" class="mr-1 hover:text-red-400">
                    About
                  </NavLink>
                </li>
                <li className="">
                  <NavLink to="/contact" class="mr-1 hover:text-red-400">
                    Contact
                  </NavLink>
                </li>
              </ul>
              {!user?.email ? (
                <NavLink to="/login">
                  <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-300 hover:text-black font-bold rounded text-base mt-4 md:mt-0">
                    Login
                  </button>
                </NavLink>
              ) : (
                <div>
                  <button
                    onClick={logOut}
                    class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-300 hover:text-black font-bold rounded text-base mt-4 md:mt-0"
                  >
                    Logout
                  </button>
                  <p className="text-sm font-bold text-red-400">
                    {user?.displayName}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
