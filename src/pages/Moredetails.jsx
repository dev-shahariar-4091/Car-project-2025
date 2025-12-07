import { useParams } from "react-router-dom";
import useCars from "../hooks/useCars";

export default function Moredetails() {
  const { id } = useParams();
  const { cars, loading } = useCars();

  if (loading) {
    return (
      <section className="pt-20 px-6 text-center">
        <p className="text-gray-600 animate-pulse">Loading more details...</p>
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
      <h2 className="text-3xl font-bold mb-4">
        {car.brand} {car.model} ({car.category})
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
           className="w-full max-h-[500px] object-contain rounded-xl shadow-md"

        />

        <div className="bg-rose-50 shadow-md rounded-md p-6 space-y-3">
          <p><strong>Location:</strong> {car.location}</p>
          <p><strong>Seats:</strong> {car.seats}</p>
          <p><strong>Transmission:</strong> {car.transmission}</p>
          <p><strong>Fuel:</strong> {car.fuel}</p>
          <p><strong>Year:</strong> {car.year}</p>
          <p><strong>Mileage:</strong> {car.mileage} km</p>
          <p><strong>Rating:</strong> ⭐ {car.rating}</p>
          <p><strong>Grade:</strong> {car.grade}</p>
          <p><strong>Price per Day:</strong> ${car.pricePerDay}</p>

          {/* Features list */}
          <div>
            <strong>Features:</strong>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              {car.features?.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}