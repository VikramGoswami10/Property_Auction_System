import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = sessionStorage.getItem("user");
        if (storedUser) {
            navigate("/"); // Redirect if already logged in
        }
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await fetch("https://localhost:5002/api/Userinfoes/login", {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            setLoading(false);

            if (response.ok) {
                alert(`Login successful as ${data.role}`);
                localStorage.setItem("userRole", data.role);
                sessionStorage.setItem("user", JSON.stringify(data));
                navigate("/"); 
                window.location.reload();
            } else {
                setError(data.message || "Invalid email or password");
            }
        } catch (error) {
            setLoading(false);
            setError("Network error. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/login-bg.jpg')" }}>
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-700">Login</h2>
                {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                <form className="mt-6" onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-600">Email</label>
                        <input 
                            type="email" 
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                            placeholder="Enter your email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600">Password</label>
                        <input 
                            type="password" 
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                            placeholder="Enter your password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
