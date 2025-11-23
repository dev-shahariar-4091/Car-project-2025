import { useEffect, useState } from "react";

export default function useCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch("/cars.json");
        if (!res.ok) throw new Error("Failed to fetch car data");
        const data = await res.json();
        setCars(data);
      } catch (error) {
        console.error("Error loading cars:", error.message);
        setCars([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return { cars, loading };
}