import { useState, useEffect } from "react";

export const useAuctionData = () => {
  const [auctions, setAuctions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("") // ✅ Use your API
      .then((response) => response.json())
      .then((data) => {
        setAuctions(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { auctions, loading, error };
};
