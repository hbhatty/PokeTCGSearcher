// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState<string | null>(null);

//   // const handleSubmit = async () => {
//   //   event.preventDefault();
//   //   setError(null);

//   //   try {
//   //     const response = await fetch("http://localhost:8080/login", {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({ email, password }),
//   //     });

//   //     if (!response.ok) {
//   //       throw new Error("Invalid credentials");
//   //     }

//   //     const data = await response.json();
//   //     // Save the token to local storage
//   //     localStorage.setItem("authToken", data.token);
//   //     alert("Login successful!");
//   //   } catch (err) {
//   //     setError(err.message);
//   //   }
//   // };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         // onSubmit={handleSubmit}
//         className="bg-white p-6 rounded shadow-md w-full max-w-sm"
//       >
//         <h2 className="text-xl font-bold mb-4 text-center">Log into your account</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium mb-2">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//             placeholder = "Enter your email"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block text-sm font-medium mb-2">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             placeholder="Enter your password"
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Login
//         </button>
//         <p className="text-sm text-gray-600 mt-4">
//           Don’t have an account?{" "}
//           <Link to="/register" className="text-blue-500 hover:underline">
//             Register here
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;
