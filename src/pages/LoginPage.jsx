import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validasi input
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    setIsLoading(true); // Mulai loading
    setError(""); // Reset error

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      // Simpan token
      localStorage.setItem("token", response.data.token);

      // Redirect ke halaman feeds
      navigate("/feeds");
    } catch (error) {
      // Tangani error
      const errorMessage = error.response?.data?.message || "Login failed.";
      setError(errorMessage);
    } finally {
      setIsLoading(false); // Selesai loading
    }
  };

  return (
    <div className="login-page min-vh-100 d-flex align-items-center justify-content-center">
      <form
        onSubmit={handleLogin}
        className="w-25 shadow p-4 bg-light rounded"
      >
        <h3 className="text-center mb-4">Login</h3>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
