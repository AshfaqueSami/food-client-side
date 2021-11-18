import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

const AddBooking = () => {
  const history = useHistory();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const imgRef = useRef();
  const handlebookingBtn = (e) => {
    const newPackage = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      image: imgRef.current.value,
    };
    fetch("https://cryptic-peak-67091.herokuapp.com/packages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPackage),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("You just added the package");
          if (alert) {
            history.push("/");
          }
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-2 mx-auto items-center">
          <div className="flex justify-center">
            <div className="flex justify-center">
              <form
                onSubmit={handlebookingBtn}
                className=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
              >
                <h2 className="font-bold text-gray-900 text-lg font-medium title-font mb-5">
                  Book This Package
                </h2>
                <div className="relative mb-4">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Package title
                  </label>
                  <input
                    ref={titleRef}
                    type="text"
                    id="title"
                    name="title"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Your title"
                    required
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Description
                  </label>
                  <textarea
                    ref={descriptionRef}
                    type="text"
                    id="description"
                    name="description"
                    className="w-full bg-white h-36 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Description"
                    required
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Image
                  </label>
                  <input
                    ref={imgRef}
                    type="text"
                    id="img"
                    name="img"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="img-url"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-red-400 border-0 py-2 px-8 focus:outline-none hover:bg-red-500 rounded text-lg"
                >
                  Add Package
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddBooking;
