import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
  
    const handleRegister = async() => {
        try {
            const response = await fetch("http://localhost:8080/api/auth/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ username, password }),
            });
      
            if (!response.ok) {
              const errorText = await response.text();
              throw new Error(errorText || "Registration failed");
            }
      
            setMessage("User registered successfully! You can now log in.");
          } catch (error: any) {
            setMessage(`Error: ${error.message}`);
          }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <form
            onSubmit={handleRegister}
            className="bg-white p-6 rounded shadow-md w-full max-w-sm"
          >
             {message && (
            <div className="mt-4 text-center text-sm text-red-500">{message}</div>
          )}
            <div className="mb-4">
            <h2 className="text-xl font-bold mb-4 text-center">Create an account</h2>
            <label htmlFor="username" className="block text-sm font-medium mb-2">
            Username
          </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Register
            </button>
            <p className="text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
          </form>
        </div>
      );
    };

export default Register;
