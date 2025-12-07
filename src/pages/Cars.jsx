import { useState } from "react";
import useCars from "../hooks/useCars";
import CarCard from "../components/CarCard";

export default function Cars() {
  const { cars, loading } = useCars();
  const [brand, setBrand] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [filtered, setFiltered] = useState([]);

  // ✅ Manual filter apply (no reload)
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

    setFiltered(result); // ✅ only update results, no reload
  };

  const showing = filtered.length ? filtered : cars;

  return (
    <section className="pt-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Sidebar filter */}
        <aside className="bg-white shadow-xl rounded-xl p-8 md:col-span-1 h-fit sticky top-24">
          <h3 className="text-2xl font-bold mb-6 border-b pb-3 text-gray-800">
            🔍 Filter Cars
          </h3>

          <div className="flex flex-col space-y-4">
            {/* Brand select */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">All Brands</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Kia">Kia</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes">Mercedes</option>
              </select>
            </div>

            {/* Price range select */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">All Prices</option>
                <option value="0-50">$0 - $50</option>
                <option value="51-100">$51 - $100</option>
                <option value="101-200">$101 - $200</option>
                <option value="201-500">$201 - $500</option>
              </select>
            </div>

            {/* ✅ Search button */}
            <button
              onClick={applyFilter}
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md shadow-md hover:bg-blue-700 transition"
            >
              Search
            </button>
          </div>
        </aside>

        {/* Car listing */}
        <div className="md:col-span-3">
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
        </div>
      </div>
    </section>
  );
}