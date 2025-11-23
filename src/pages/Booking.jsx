import { useParams } from "react-router-dom";
import { useState } from "react";
import Model from "../components/Model";

export default function Booking() {
  const { id } = useParams();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <section className="pt-20 px-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-brand-600">
        Booking for car #{id}
      </h2>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <input
          required
          name="fullName"
          placeholder="Full name"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-brand-600"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-brand-600"
        />
        <button
          type="submit"
          className="bg-brand-600 border-[2px solid green] text-black rounded-md py-2 px-4 w-full hover:bg-brand-700"
        >
          Confirm booking
        </button>
      </form>

      <Model
        open={success}
        title="Booking Confirmed!"
        message="🎉 Congratulations! Your booking was successful."
        onClose={() => setSuccess(false)}
      />
    </section>
  );
}