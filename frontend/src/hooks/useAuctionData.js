import { useState, useEffect } from "react";
import { baseurl } from "../Utils/api";

export const useAuctionData = () => {
  const [auctions, setAuctions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAuctions = () => {
    fetch(baseurl + "Auctions/with-details", { cache: "no-cache" }) // Force fresh fetch
      .then((response) => response.json())
      .then((data) => {
        console.log("Total Auctions Received:", data.length);
        setAuctions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Fetch Error:", err);
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAuctions();
  }, []); // Runs only once when component mounts

  return { auctions, loading, error, refetch: fetchAuctions }; // Provide refetch function
};
