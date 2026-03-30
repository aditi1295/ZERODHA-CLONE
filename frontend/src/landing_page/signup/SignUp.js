import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://zerodha-h7g7.onrender.com";

function SignUp() {
    const [mode, setMode] = useState("signup");
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState({ text: "", isError: false });

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const resetForm = () => {
        setFormData({ username: "", email: "", password: "" });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setMessage({ text: "", isError: false });

        try {
            const endpoint = mode === "signup" ? "/signup" : "/login";
            const payload =
                mode === "signup"
                    ? formData
                    : {
                        email: formData.email,
                        password: formData.password,
                    };

            const response = await axios.post(`${API_BASE_URL}${endpoint}`, payload, {
                withCredentials: true,
            });

            const serverMessage = response?.data?.message || "Authentication successful";
            setMessage({ text: serverMessage, isError: false });

            if (mode === "signup") {
                resetForm();
            } else {
                setFormData((prev) => ({ ...prev, password: "" }));
            }
        } catch (error) {
            const serverMessage =
                error?.response?.data?.message || "Something went wrong. Please try again.";
            setMessage({ text: serverMessage, isError: true });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container">
            <div className="row mt-5 align-items-center">
                <h1 className="text-center">Open a free demat & trading account online</h1>
                <p className="text-center text-secondary">
                    Start investing brokerage free and join a community of 1.6+ crore investors and traders
                </p>

                <div className="col-md-6 mt-4 mb-4">
                    <img
                        src="media/images/account_open.svg"
                        alt="Open account"
                        className="img-fluid"
                    />
                </div>

                <div className="col-md-6">
                    <div className="card shadow-sm border-0 p-4">
                        <div className="d-flex mb-3 gap-2">
                            <button
                                type="button"
                                className={`btn ${mode === "signup" ? "btn-primary" : "btn-outline-primary"}`}
                                onClick={() => {
                                    setMode("signup");
                                    setMessage({ text: "", isError: false });
                                }}
                            >
                                Signup
                            </button>
                            <button
                                type="button"
                                className={`btn ${mode === "login" ? "btn-primary" : "btn-outline-primary"}`}
                                onClick={() => {
                                    setMode("login");
                                    setMessage({ text: "", isError: false });
                                }}
                            >
                                Login
                            </button>
                        </div>

                        <h3 className="mb-3">{mode === "signup" ? "Create account" : "Login to your account"}</h3>

                        <form onSubmit={handleSubmit}>
                            {mode === "signup" && (
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">
                                        Username
                                    </label>
                                    <input
                                        id="username"
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        value={formData.username}
                                        onChange={onInputChange}
                                        required
                                    />
                                </div>
                            )}

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={formData.email}
                                    onChange={onInputChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={formData.password}
                                    onChange={onInputChange}
                                    required
                                    minLength={6}
                                />
                            </div>

                            {message.text && (
                                <div
                                    className={`alert ${message.isError ? "alert-danger" : "alert-success"}`}
                                    role="alert"
                                >
                                    {message.text}
                                </div>
                            )}

                            <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                                {isSubmitting
                                    ? "Please wait..."
                                    : mode === "signup"
                                        ? "Create account"
                                        : "Login"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;