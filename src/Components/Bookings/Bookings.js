import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import SingleBooking from "../SingleBooking/SingleBooking";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  const DeleteBtn = (id) => {
    const confirmLog = window.confirm(
      "Are you sure, you want to delete this package?"
    );
    if (confirmLog) {
      fetch(`http://localhost:5000/bookings?id=${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Remove success !");
            const filtered = bookings.filter((service) => service._id != id);
            setBookings(filtered);
          }
        });
    }
  };
  return (
    <div>
      <section className="flex justify-center">
        <div class="container px-5 py-24 mx-auto">
          {
            bookings.map(booking=><SingleBooking
              key={booking._id}
              booking={booking}
              DeleteBtn={DeleteBtn}
            ></SingleBooking>)
          }
        </div>
      </section>
    </div>
  );
};

export default Bookings;
