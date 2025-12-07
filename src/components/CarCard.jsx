import { Link } from "react-router-dom";

export default function CarCard({ car }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
      <div className="relative">
        <img
          src={car.image || "https://via.placeholder.com/400x200?text=No+Image"}
          alt={`${car.brand} ${car.model}`}
          className="h-44 w-full object-cover"
        />
        {car.available && (
          <span
            aria-label="Car availability"
            className="absolute top-2 left-2 bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-md"
          >
            Available
          </span>
        )}
        <span className="absolute top-2 right-2 bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-md">
          {car.year}
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-brand-700">
          {car.brand} {car.model}
        </h3>
        <p className="mt-1 text-sm text-gray-600">
          {car.location} • {car.seats} seats • {car.transmission} • {car.fuel}
        </p>
        <p className="mt-2 font-semibold text-brand-700">
          ${car.pricePerDay}/day
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <Link
            to={`/details/${car.id}`}
            className="border border-brand-600 text-brand-600 rounded-md py-2 px-3 text-center text-sm hover:bg-brand-50 transition"
          >
            View Details
          </Link>
          <Link
            to={`/booking/${car.id}`}
             className="border border-brand-600 text-brand-600 rounded-md py-2 px-3 text-center text-sm hover:bg-brand-50 transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}