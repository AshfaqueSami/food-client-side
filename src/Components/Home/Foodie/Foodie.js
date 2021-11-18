import React from "react";
import "./Foodie.css";
import food_1 from "../../../images/food-1.png";
import food_2 from "../../../images/food-2.png";
import food_3 from "../../../images/food-3.png";
import food_4 from "../../../images/food-4.png";

const Foodie = () => {
  return (
    <div className="flex justify-center">
      <div className="lg:my-12">
        <div className="container lg:px-24 px-2">
          <div
            className="food_cart"
            style={{
              backgroundImage: `url(${food_1})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              margin: "10px",
              display: "flex",
              justifyContent: "left",
            }}
          >
            <div className="py-36 lg:py-20 lg:px-12 px-2">
              <p className="text-2xl text-left font-bold">Double Cheese</p>
              <p className="text-6xl text-red-600 font-bold text-left lg:my-3">
                Burger
              </p>
              <p className="lg:text-xl text-left">
                With Free Cocacola. Stay home ,<br /> we deliver
              </p>
            </div>
          </div>
        </div>
        <div className="container lg:px-24 px-4 lg:flex">
          <div
            style={{
              backgroundImage: `url(${food_2})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              // backgroundSize: "cover",
              margin: "10px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "left",
              height: "400px",
            }}
            className="food_cart"
          >
            <div className="lg:py-4 lg:px-12 px-2">
              <p className="text-3xl text-left text-yellow-400 font-bold my-3">
                Enjoy 30% CashBack
              </p>
              <p className="text-xl text-left text-white">
                Up to $70 on all Bikash
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${food_3})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              // backgroundSize: "cover",
              margin: "10px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "left",
              height: "400px",
            }}
            className="food_cart"
          >
            <div className="lg:py-4 lg:px-12 px-2">
              <p className="text-3xl text-red-500 font-bold my-3">
                25 EXTRA <br /> FREE ON KFC
              </p>
              <p className="text-sm font-bold">Stay home , we deliver</p>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${food_4})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              // backgroundSize: "cover",
              margin: "10px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "left",
              height: "400px",
            }}
            className="food_cart"
          >
            <div className="lg:py-4 lg:px-12 px-2">
              <p className="text-md text-yellow-400 font-bold my-3 text-left">
                Test with
              </p>
              <p className="text-2xl font-bold text-left text-white">
                JAPANESE FOOD AT HOME
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foodie;
