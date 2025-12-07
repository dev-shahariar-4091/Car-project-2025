import { useParams, useNavigate } from "react-router-dom";
import useCars from "../hooks/useCars";

export default function Details() {
  const { id } = useParams();
  const { cars, loading } = useCars();
  const navigate = useNavigate();

  if (loading) {
    return (
      <section className="pt-20 px-6 text-center">
        <p className="text-gray-600 animate-pulse">Loading car details...</p>
      </section>
    );
  }

  const car = cars.find((c) => String(c.id) === String(id));

  if (!car) {
    return (
      <section className="pt-20 px-6 text-center">
        <p className="text-red-600 font-semibold">❌ Car not found</p>
      </section>
    );
  }

  return (
    <section className="pt-20 px-6">
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src={car.image || "https://via.placeholder.com/400x300?text=No+Image"}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-64 object-cover rounded-xl shadow-md"
        />
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-2xl font-bold text-brand-600">
            {car.brand} {car.model}
          </h2>
          <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-700">
            <span className="bg-gray-100 rounded-md px-2 py-1">
              Rating: *{car.rating}
            </span>
            <span className="bg-gray-100 rounded-md px-2 py-1">
              Grade: {car.grade}
            </span>
            <span className="bg-gray-100 rounded-md px-2 py-1">
              Year: {car.year}
            </span>
            <span className="bg-gray-100 rounded-md px-2 py-1">
              Mileage: {car.mileage} km
            </span>
            <span className="bg-gray-100 rounded-md px-2 py-1">
              Transmission: {car.transmission}
            </span>
            <span className="bg-gray-100 rounded-md px-2 py-1">
              Fuel: {car.fuel}
            </span>
          </div>
          <p className="mt-3 font-semibold text-brand-700 text-lg">
            ${car.pricePerDay}/day
          </p>

          {/* ✅ Buttons */}
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              ⬅ Back
            </button>
            <button
              onClick={() => navigate(`/cars/${id}/more`)} // navigate to more details page
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition"
            >
              More Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
