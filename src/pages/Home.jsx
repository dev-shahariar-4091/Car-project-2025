import { useMemo, useState } from "react";
import useCars from "../hooks/useCars";
import CarCard from "../components/CarCard";

export default function Home() {
  const { cars, loading } = useCars();
  const [filtered, setFiltered] = useState([]);

  // show first 12 cars initially
  const initial = useMemo(() => cars.slice(0, 12), [cars]);

  const showing = filtered.length ? filtered : initial;

  return (
    <section className="pt-20 px-6">
      {/* ✅ Full-screen banner */}
      <div
        className="w-full h-screen overflow-hidden mb-8"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1647588854348-f3b37a0f0ef7?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/40 h-full flex flex-col justify-center items-start p-8 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Find Your Perfect Rental Car
          </h1>
          <p className="mt-4 text-white/90 max-w-2xl text-lg">
            Discover amazing deals on quality vehicles. Book now and drive away
            with confidence.
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            <span className="bg-white/90 rounded-md px-3 py-1 text-sm font-medium">
              500+ Premium Cars
            </span>
            <span className="bg-white/90 rounded-md px-3 py-1 text-sm font-medium">
              50+ Locations
            </span>
            <span className="bg-white/90 rounded-md px-3 py-1 text-sm font-medium">
              24/7 Support
            </span>
            <span className="bg-white/90 rounded-md px-3 py-1 text-sm font-medium">
              99% Satisfaction
            </span>
          </div>
        </div>
      </div>

      {/* ✅ Car listing */}
      {loading ? (
        <div>Loading cars...</div>
      ) : showing.length ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {showing.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-md p-6 text-center">
          No cars found
        </div>
      )}
    </section>
  );
}