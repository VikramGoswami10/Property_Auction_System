import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function WonAuctionDetails() {
  const { auctionId } = useParams();
  const [auctionDetails, setAuctionDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuctionDetails = async () => {
      try {
        const response = await axios.get(`https://localhost:7155/api/Auctions/${auctionId}`);
        setAuctionDetails(response.data);
      } catch (error) {
        console.error("Error fetching auction details:", error);
        setError("Failed to fetch auction details");
      } finally {
        setLoading(false);
      }
    };

    fetchAuctionDetails();
  }, [auctionId]);

  // Function to dynamically load Razorpay SDK
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (!auctionDetails) return;

    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      alert("Failed to load Razorpay. Please try again.");
      return;
    }

    try {
      // Step 1: Create an Order in Backend
      const orderResponse = await axios.post("https://localhost:7155/api/payments/createOrder", {
        amount: auctionDetails.currentBid * 100, // Convert to paise
        currency: "INR",
      });

      const { id: orderId, amount, currency } = orderResponse.data;

      // Step 2: Open Razorpay Payment Interface
      const options = {
        key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
        amount: amount,
        currency: currency,
        name: "Property Auction",
        description: `Payment for ${auctionDetails.title}`,
        order_id: orderId,
        handler: async function (response) {
          // Step 3: Capture and Verify Payment on Backend
          try {
            await axios.post("https://localhost:7155/api/payments/capture", {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            });

            alert("Payment successful! Property purchase confirmed.");
          } catch (error) {
            console.error("Payment verification failed:", error);
            alert("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: "Your Name",
          email: "your-email@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentInstance = new window.Razorpay(options);
      paymentInstance.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("Failed to initiate payment. Please try again.");
    }
  };

  if (loading) return <p>Loading auction details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold">{auctionDetails.title}</h2>
      <p>Current Bid: ₹{auctionDetails.currentBid}</p>
      <p>Ends: {auctionDetails.endDate}</p>
      <button onClick={handlePayment} className="mt-4 bg-green-600 text-white py-2 px-4 rounded">
        Make Payment
      </button>
    </div>
  );
}

export default WonAuctionDetails;
