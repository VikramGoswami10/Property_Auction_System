import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../Screens/auth/context/AuthContext";
import { baseurl } from "../../Utils/api";
import { useNavigate } from "react-router-dom";


const CreateAuction = () => {
  const { user } = useAuth();
  const [categoryId, setCategoryId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [address, setAddress] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    if (!user || user.userRole !== "seller") {
      setError("Only sellers can create an auction.");
      setLoading(false);
      return;
    }
    
    const sellerId = user.userId; // Seller ID stored in Property table

    try {
      // Step 1: Create Property First
      const propertyData = {
        sellerId: sellerId, // Use camelCase
        categoryId: parseInt(categoryId), // Ensure it's an integer
        title,
        image: imageUrl, // Image should be a URL
        address,
        description,
      };

      const propertyResponse = await axios.post(
        baseurl + "Properties/create",
        propertyData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const propertyId = propertyResponse.data.propertyId; // Use the correct key

      if (!propertyId) {
        throw new Error("Property ID not returned from backend");
      }

      // Step 2: Create Auction using propertyId
      const auctionData = {
        propertyId: propertyId, // Use camelCase
        startTime: new Date(startTime).toISOString(), // Ensure correct date format
        endTime: new Date(endTime).toISOString(),
        status: "ongoing", // Use the correct status
      };

      await axios.post(baseurl + "Auctions/create", auctionData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      alert("Auction created successfully!");
      navigate(`/seller`);
      setLoading(false);

      // Reset Form
      setCategoryId("");
      setTitle("");
      setDescription("");
      setImageUrl(""); // Reset image URL field
      setAddress("");
      setStartTime("");
      setEndTime("");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        // Display backend error message
        setError(err.response.data.error);
      } else {
        setError("Failed to create auction. Please try again.");
      }
      console.error("Auction creation error:", err);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Create Auction
      </h2>
      {error && (
        <p className="text-red-500 text-sm mb-4 whitespace-pre-line">{error}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Select Property Type:
          </label>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="">Select a property type</option>
            <option value="1">Residential</option>
            <option value="2">Commercial</option>
            <option value="3">Luxury</option>
            <option value="4">Land</option>
            <option value="5">Special Use</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
            rows="4"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Image URL:
          </label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Address:
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Start Time:
            </label>
            <input
              type="datetime-local"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              End Time:
            </label>
            <input
              type="datetime-local"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full ${
            loading ? "bg-gray-400" : "bg-purple-600 hover:bg-purple-700"
          } text-white font-semibold py-3 rounded-md`}
        >
          {loading ? "Creating..." : "Create Auction"}
        </button>
      </form>
    </div>
  );
};

export default CreateAuction;
