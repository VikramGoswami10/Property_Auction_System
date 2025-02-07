import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Caption, Container, CustomNavLink, PrimaryButton, Title } from "../../Routes";
import { commonClassNameOfInput } from "../../Components/Common/Design";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await fetch("https://localhost:7155/api/Users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }), 
            });

            const data = await response.json();
            setLoading(false);

            if (response.ok) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("role", data.role); 

                // Redirect based on user role
                if (data.role === "admin") {
                    navigate("/admin"); 
                }else if (data.role === "buyer"){
                    navigate("/buyer"); 
                }
                else if (data.role === "seller"){
                    navigate("/seller"); 
                } 
                else {
                    navigate("/");
                }
            } else {
                setError(data.message || "Login failed");
            }
        } catch (error) {
            setLoading(false);
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <>
            <section className="register pt-16 relative">
                <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute top-2/3"></div>
                <div className="bg-[#241C37] pt-8 h-[40vh] relative content">
                    <Container>
                        <div>
                            <Title level={3} className="text-white">Log In</Title>
                            <div className="flex items-center gap-3">
                                <Title level={5} className="text-green font-normal text-xl">Home</Title>
                                <Title level={5} className="text-white font-normal text-xl">/</Title>
                                <Title level={5} className="text-white font-normal text-xl">Log In</Title>
                            </div>
                        </div>
                    </Container>
                </div>
                <form className="bg-white shadow-s3 w-1/3 m-auto my-16 p-8 rounded-xl" onSubmit={handleLogin}>
                    <div className="text-center">
                        <Title level={5}>New Member</Title>
                        <p className="mt-2 text-lg">
                            Do you already have an account? <CustomNavLink href="/register">Signup Here</CustomNavLink>
                        </p>
                    </div>

                    {error && <p className="text-red-500 text-center mt-2">{error}</p>}

                    <div className="py-5 mt-8">
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
                    <div className="flex items-center gap-2 py-4">
                        <input type="checkbox" required />
                        <Caption>I agree to the Terms & Policy</Caption>
                    </div>
                    <PrimaryButton className="w-full rounded-none my-5" type="submit" disabled={loading}>
                        {loading ? "Logging in..." : "LOGIN"}
                    </PrimaryButton>
                    <p className="text-center mt-5">
                        By clicking the signup button, you create an account, and you agree to PropertyAuction 
                        <span className="text-green underline"> Terms & Conditions </span> &
                        <span className="text-green underline"> Privacy Policy </span>.
                    </p>
                </form>
                <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute bottom-96 right-0"></div>
            </section>
        </>
    );
};