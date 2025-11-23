import { useMemo, useState } from "react";
import useCars from "../hooks/useCars";
import CarCard from "../components/CarCard";
import SearchBar from "../components/Searchbar";
import Searchbar from "../components/Searchbar";

export default function Home() {
  const { cars, loading } = useCars();
  const [brand, setBrand] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [filtered, setFiltered] = useState([]);

  const initial = useMemo(() => cars.slice(0, 12), [cars]);

  const applyFilter = () => {
    let result = [...cars];

    if (brand) {
      result = result.filter(
        (c) => c.brand.toLowerCase() === brand.toLowerCase()
      );
    }

    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      result = result.filter(
        (c) => c.pricePerDay >= (min || 0) && c.pricePerDay <= (max || 99999)
      );
    }

    setFiltered(result);
  };

  const showing = filtered.length ? filtered : initial;

  return (
    <section className="pt-20 px-6">
      {/* Banner with background image */}
      <div
        className="rounded-2xl overflow-hidden mb-8"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1600)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/40 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Find Your Perfect Rental Car
          </h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Discover amazing deals on quality vehicles. Book now and drive away
            with confidence.
          </p>
          <div className="mt-6">
            <Searchbar
              brand={brand}
              setBrand={setBrand}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              onSearch={applyFilter}
            />
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
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