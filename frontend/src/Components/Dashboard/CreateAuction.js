import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateAuction = () => {
    const [propertyType, setPropertyType] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [address, setAddress] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [sellerId, setSellerId] = useState(null);
    const [error, setError] = useState(null);

    // ✅ Fetch Current Seller ID from Backend
    useEffect(() => {
        const fetchSellerId = async () => {
            try {
                const response = await axios.get("https://localhost:5002/api/current-user", { withCredentials: true });
                setSellerId(response.data.sellerId);
            } catch (err) {
                console.error("Error fetching seller ID:", err);
            }
        };

        fetchSellerId();
    }, []);

    // ✅ Handle Auction Creation
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        if (!sellerId) {
            setError("Seller ID is missing. Please log in.");
            return;
        }

        const formData = new FormData();
        formData.append("SellerId", sellerId);
        formData.append("PropertyType", propertyType); // ✅ Store property type
        formData.append("Title", title);
        formData.append("Address", address);
        formData.append("Description", description);
        formData.append("Image", image);
        formData.append("Start_Time", startTime);
        formData.append("End_Time", endTime);
        formData.append("Status", "ongoing");

        try {
            const response = await axios.post("https://localhost:5002/api/Auctions/create", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            console.log("Auction Created:", response.data);
            alert("Auction created successfully!");
        } catch (err) {
            setError("Failed to create auction. Please try again.");
            console.error(err);
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Auction</h2>
            <form onSubmit={handleSubmit}>
                {/* ✅ Property Type Dropdown */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Select Property Type:</label>
                    <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        required
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
                    >
                        <option value="">Select a property type</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Land">Land</option>
                        <option value="Special Use">Special Use</option>
                    </select>
                </div>

                {/* ✅ Other Fields */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
                        rows="4"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Image:</label>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Address:</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Start Time:</label>
                        <input
                            type="datetime-local"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            required
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">End Time:</label>
                        <input
                            type="datetime-local"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            required
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
                        />
                    </div>
                </div>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <button
                    type="submit"
                    className="w-full bg-purple-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-200"
                >
                    Create Auction
                </button>
            </form>
        </div>
    );
};

export default CreateAuction;
