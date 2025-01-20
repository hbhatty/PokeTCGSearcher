import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../services/authService";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const result = await registerUser(email, password);
      console.log("Registration successful: ", result);
      setSuccess(true);
    } catch (err: any) {
      console.log("Registration failed: ", err.message);
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {success ? (
        <p>Registration succesful! You can log in.</p>
      ) : (
        <form
          onSubmit={handleRegister}
          className="bg-white p-6 rounded shadow-md w-full max-w-sm"
        >
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-4 text-center">
              Create an account
            </h2>
            <label
              htmlFor="username"
              className="block text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
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
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Register;
