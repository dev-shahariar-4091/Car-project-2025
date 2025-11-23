export default function Searchbar({
  brand,
  setBrand,
  priceRange,
  setPriceRange,
  onSearch,
}) {
  const brands = [
    "Tesla",
    "BMW",
    "Audi",
    "Toyota",
    "Honda",
    "Nissan",
    "Mercedes",
    "Kia",
    "Hyundai",
    "Ford",
  ];

  const priceRanges = [
    { value: "", label: "Any" },
    { value: "0-50", label: "$0-$50/day" },
    { value: "50-80", label: "$50-$80/day" },
    { value: "80-120", label: "$80-$120/day" },
    { value: "120-200", label: "$120-$200/day" },
    { value: "200-999", label: "$200+/day" },
  ];

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-4 grid md:grid-cols-4 gap-3">
      {/* Brand Filter */}
      <div>
        <label htmlFor="brand" className="text-sm text-gray-600">
          Brand
        </label>
        <select
          id="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-brand-600"
        >
          <option value="">All</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="md:col-span-2">
        <label htmlFor="priceRange" className="text-sm text-gray-600">
          Price range
        </label>
        <select
          id="priceRange"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-brand-600"
        >
          {priceRanges.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      {/* Search Button */}
      <div className="flex items-end">
        <button
          type="button"
          onClick={onSearch}
          className="bg-brand-600 text-white rounded-md py-2 px-4 w-full hover:bg-brand-700 transition"
        >
          Search Cars
        </button>
      </div>
    </div>
  );
}
