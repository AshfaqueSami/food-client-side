import React, { useEffect,useState } from "react";
import Banner from "../Banner/Banner";
import Foodie from "../Foodie/Foodie";
import Package from "../Package/Package";
import NewLetter from "../NewsLetter/NewLetter";

const Home = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-peak-67091.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <section className="flex justify-center">
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12">
          {packages.map((booking) => (
            <Package
              key={booking._id}
              booking={booking}
            ></Package>
          ))}
        </div>
      </section>
      <Foodie></Foodie>
      <NewLetter></NewLetter>
    </div>
  );
};

export default Home;
