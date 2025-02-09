import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Caption, Container,PrimaryButton, Title } from "../../Routes";
import { commonClassNameOfInput } from "../../Components/Common/Design";

export const LoginAsSeller = () => {
    const [name, setName] = useState(""); // State for name
    const [email, setEmail] = useState(""); // State for email
    const [password, setPassword] = useState(""); // State for password
    const [error, setError] = useState(""); // State for error messages
    const [loading, setLoading] = useState(false); // State for loading status
    const navigate = useNavigate(); // Hook for navigation

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(""); // Clear any previous error messages
        setLoading(true); // Set loading to true

        try {
            const response = await fetch("https://localhost:7155/api/Users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name, // Use the name state
                    email: email, // Use the email state
                    password: password, // Use the password state
                    role: "seller", // Set the role to buyer
                }),
            });

            const data = await response.json();
            setLoading(false); // Set loading to false

            if (response.ok) {
                // Handle successful registration, e.g., navigate to login page
                navigate("/login");
            } else {
                setError(data.message || "Registration failed"); // Set error message
            }
        } catch (error) {
            setLoading(false); // Set loading to false
            setError("An error occurred. Please try again."); // Set error message
        }
    };

    return (
        <section className="register pt-16 relative">
            <Container>
                <form className="bg-white shadow-s3 w-1/3 m-auto my-16 p-8 rounded-xl" onSubmit={handleRegister}>
                    <div className="text-center">
                        <Title level={5}>Become A Seller</Title>
                    </div>

                    {error && <p className="text-red-500 text-center mt-2">{error}</p>}

                    <div className="py-5 mt-8">
                        <Caption className="mb-2">Enter Your Name *</Caption>
                        <input 
                            type="text" 
                            name="name" 
                            className={commonClassNameOfInput} 
                            placeholder="Enter Your Name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required 
                        />
                    </div>
                    <div>
                        <Caption className="mb-2">Enter Your Email *</Caption>
                        <input 
                            type="email" 
                            name="email" 
                            className={commonClassNameOfInput} 
                            placeholder="Enter Your Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <div>
                        <Caption className="mb-2">Password *</Caption>
                        <input 
                            type="password" 
                            name="password" 
                            className={commonClassNameOfInput} 
                            placeholder="Enter Your Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <PrimaryButton className="w-full rounded-none my-5" type="submit" disabled={loading}>
                        {loading ? "Registering..." : "REGISTER"}
                    </PrimaryButton>
                </form>
            </Container>
        </section>
    );
};    