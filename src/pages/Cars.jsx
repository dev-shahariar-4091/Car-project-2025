import { useState } from "react";
import useCars from "../hooks/useCars";
import CarCard from "../components/CarCard";
import Searchbar from "../components/Searchbar";

export default function Cars() {
  const { cars, loading } = useCars();
  const [brand, setBrand] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [filtered, setFiltered] = useState([]);

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

  const showing = filtered.length ? filtered : cars;

  return (
    <section className="pt-20 px-6">
      <div className="mb-6">
        <SearchBar
          brand={brand}
          setBrand={setBrand}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          onSearch={applyFilter}
        />
      </div>

      {loading ? (
        <div className="text-center text-gray-600">Loading cars...</div>
      ) : showing.length ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {showing.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-md p-6 text-center">
          ❌ No cars found
        </div>
      )}
    </section>
  );
}