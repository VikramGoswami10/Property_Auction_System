import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await fetch("https://localhost:7155/api/Users/logout", {
                method: "POST",
                credentials: "include", // Ensure cookies are included
            });

            alert("Logged out successfully!");
            navigate("/");
        } catch (error) {
            alert("Logout failed. Try again.");
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
