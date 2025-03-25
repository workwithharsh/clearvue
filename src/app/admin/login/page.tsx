"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

/**
 * Admin login page.
 * 
 * - Uses NextAuth's `signIn` method for authentication.
 * - Handles form submission and navigation.
 * 
 * @returns {JSX.Element}
 */
function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Attempt to sign in using NextAuth credentials provider
    const result = await signIn("credentials", { redirect: false, email, password });

    if (result?.ok) {
      // Redirect to the admin dashboard
      router.push("/admin");
    } else {
      // Show an alert if authentication fails
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>

        {/* Email */}
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-2" 
          required 
        />

        {/* Password */}
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-2" 
          required 
        />

        {/* Login button */}
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin