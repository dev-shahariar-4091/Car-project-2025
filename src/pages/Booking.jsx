import { useParams } from "react-router-dom";
import { useState } from "react";
import useCars from "../hooks/useCars";
import Model from "../components/Model";

export default function Booking() {
  const { id } = useParams();
  const { cars } = useCars();
  const [success, setSuccess] = useState(false);

  const car = cars.find((c) => String(c.id) === id);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true); // ✅ show popup
  };

  // ✅ Close popup and reload page
  const handleClose = () => {
    setSuccess(false);
    window.location.reload();
  };

  return (
    <section className="pt-20 px-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
        Booking for Car #{id}
      </h2>

      {/* Car details */}
      {car && (
        <div className="bg-white shadow-md rounded-md p-4 mb-6 text-center">
          <img
            src={car.image}
            alt={car.brand}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold">{car.brand} {car.model}</h3>
          <p className="text-gray-700">
            Rent per day: <span className="font-bold text-blue-600">${car.pricePerDay}</span>
          </p>
        </div>
      )}

      {/* Booking form */}
      <form onSubmit={handleSubmit} className="mt-4 space-y-3 bg-white shadow-md rounded-md p-6">
        <input
          required
          name="fullName"
          placeholder="Full name"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full hover:bg-blue-700 transition"
        >
          Confirm Booking
        </button>
      </form>

      {/* Popup modal */}
      <Model
        open={success}
        title="Booking Confirmed!"
        message="🎉 Congratulations! Your booking was successful."
        onClose={handleClose} // ✅ reload after closing
      />
    </section>
  );
}