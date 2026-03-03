import { useState, useEffect } from "react";

const useTrash = (id) => {
  const [d, setD] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchD = async () => {
      try {
        console.log(`Fetching: /api/hsart/${id}`); // Debug URL
        const response = await fetch(`/api/hsart/${id}`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        console.log("Fetched data:", data); // Debug response
        setD(data.d || data); // Handle different response formats
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchD();
  }, [id]);

  return { d, error };
};

export default useTrash;
