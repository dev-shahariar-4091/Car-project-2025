export default function SearchBar({
  brand,
  setBrand,
  priceRange,
  setPriceRange,
  onSearch,
}) {
  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-4 grid md:grid-cols-4 gap-3">
       {" "}
      <div>
          <label className="text-sm text-gray-600">Brand</label> {" "}
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-brand-600"
        >
            <option value="">All</option>  <option>Tesla</option> {" "}
          <option>BMW</option>  <option>Audi</option>  <option>Toyota</option> {" "}
          <option>Honda</option>  <option>Nissan</option> {" "}
          <option>Mercedes</option>  <option>Kia</option> {" "}
          <option>Hyundai</option>  <option>Ford</option> {" "}
        </select>
         {" "}
      </div>
       {" "}
      <div className="md:col-span-2">
          <label className="text-sm text-gray-600">Price range</label> {" "}
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-brand-600"
        >
            <option value="">Any</option> {" "}
          <option value="0-50">$0–$50/day</option> {" "}
          <option value="50-80">$50–$80/day</option> {" "}
          <option value="80-120">$80–$120/day</option> {" "}
          <option value="120-200">$120–$200/day</option> {" "}
          <option value="200-999">$200+/day</option> {" "}
        </select>
         {" "}
      </div>
       {" "}
      <div className="flex items-end">
         {" "}
        <button onClick={onSearch} className="btn-primary w-full">
          Search Cars
        </button>
          {" "}
      </div>
       {" "}
    </div>
  );
}
