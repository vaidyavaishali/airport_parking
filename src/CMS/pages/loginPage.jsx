import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUnlock } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contextApi/userContext";

const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [, setUserAuth] = useAuth();
    const [type, setType] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const logIn = async (e) => {
        e.preventDefault();

        setError(null);
        if (!email || !password) {
            setError("Please fill in both email and password.");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post("https://conscientious-technologies-backend.vercel.app/login", {
                email,
                password,
            });

            if (response.status === 200) {
                const userData = {
                    user: response.data.user,
                    token: response.data.token,
                };
                setUserAuth(userData);
                localStorage.setItem("auth", JSON.stringify(userData));
                navigate("/dashboard");
            }
        } catch (error) {
            setError("Invalid credentials. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center text-white">
            <form
                onSubmit={logIn}
                className="max-w-md w-full p-8 bg-white text-black rounded-lg shadow-lg"
            >
                {/* Logo */}
                <div className="w-full bg-blue-600 py-3 mb-6 rounded-lg flex justify-center">
                    <h1 className="text-3xl font-bold text-white">
                        <span className="text-yellow-400">FlyAway</span> Parking
                    </h1>
                </div>

                {/* Email Input */}
                <div className="mb-5 relative">
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            required
                        />
                        <FaEnvelope className="icon absolute top-3 right-4 text-gray-500" />
                    </div>
                </div>

                {/* Password Input */}
                <div className="mb-6 relative">
                    <div className="relative">
                        <input
                            type={type ? "password" : "text"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            required
                        />
                        {type ? (
                            <FaLock
                                className="icon absolute top-3 right-4 cursor-pointer text-gray-500"
                                onClick={() => setType(!type)}
                            />
                        ) : (
                            <FaUnlock
                                className="icon absolute top-3 right-4 cursor-pointer text-gray-500"
                                onClick={() => setType(!type)}
                            />
                        )}
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition duration-300"
                    disabled={loading}
                >
                    {loading ? "Logging In..." : "Log In"}
                </button>

                {/* Error Message */}
                {error && <p className="text-red-600 text-sm mt-4">{error}</p>}
            </form>
        </div>
    );
};

export default SignIn;
