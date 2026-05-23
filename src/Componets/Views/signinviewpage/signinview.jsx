// src/pages/SignInPage.jsx

import React, { useState } from "react";
 import { FcGoogle } from "react-icons/fc";

import { Link, useNavigate } from "react-router-dom";

import {
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth, provider } from "../../FireBase/Firebase";

const SignInPage = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    setSuccessMessage("");

    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      console.log(userCredential.user);

      alert("Login Successful");

      setLoading(false);

      navigate("/crud");
    } catch (error) {
      setLoading(false);

      // HANDLE SPECIFIC ERRORS
      if (error.code === "auth/user-not-found") {

        setError("Email not found. Please sign up first.");

      } else if (error.code === "auth/wrong-password") {

        setError("Incorrect password. Please try again.");

      } else if (error.code === "auth/invalid-email") {

        setError("Invalid email address.");

      } else if (error.code === "auth/user-disabled") {

        setError("This account has been disabled.");

      } else {

        setError(error.message);

      }
    }
  };

  // GOOGLE LOGIN
  const handleGoogleLogin = async () => {
    setError("");

    setSuccessMessage("");

    setLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);

      console.log(result.user);

      alert("Google Login Successful");

      setLoading(false);

      navigate("/crud");
    } catch (error) {
      setLoading(false);

      setError(error.message);
    }
  };

  // RESET PASSWORD
  const handleResetPassword = async () => {
    if (!email) {
      setError("Please enter your email first");

      return;
    }

    setError("");

    setSuccessMessage("");

    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email, {
        url: window.location.origin + "/signin",
        handleCodeInApp: true,
      });

      setSuccessMessage("Password reset email sent! Check your inbox and spam folder.");

      setLoading(false);
    } catch (error) {
      setLoading(false);

      // HANDLE SPECIFIC ERRORS
      if (error.code === "auth/user-not-found") {

        setError("Email not found in our system.");

      } else if (error.code === "auth/invalid-email") {

        setError("Invalid email address.");

      } else if (error.code === "auth/too-many-requests") {

        setError("Too many reset attempts. Please try again later.");

      } else {

        setError(error.message);

      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen gradient-bg text-gray-900 dark:text-white transition-colors duration-300 antialiased selection:bg-blue-200 dark:selection:bg-blue-800">
      <main className="flex-grow flex items-center justify-center px-4 py-12 relative z-10 w-full overflow-hidden">
        <div className="w-full max-w-md">
          <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl text-gray-900 dark:text-white rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/60 dark:border-gray-700/50 p-8 sm:p-10 relative">
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-300/40 dark:bg-blue-600/30 rounded-full blur-2xl pointer-events-none"></div>

            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-purple-300/40 dark:bg-purple-600/30 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg sm:text-xl font-medium">
                  Sign in to our platform
                </h3>
              </div>

              <form
                onSubmit={handleLogin}
                className="pt-4 sm:pt-6 flex flex-col gap-5"
              >
                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-bold text-gray-800 dark:text-gray-200"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    placeholder="example@company.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* PASSWORD */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-bold text-gray-800 dark:text-gray-200"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    id="password"
                    placeholder="•••••••••"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* REMEMBER + RESET */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      id="remember"
                      type="checkbox"
                      className="w-4 h-4 rounded"
                    />

                    <label htmlFor="remember" className="text-sm font-medium">
                      Remember me
                    </label>
                  </div>

                  <button
                    type="button"
                    onClick={handleResetPassword}
                    disabled={loading}
                    className="text-blue-500 text-sm hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Lost Password?
                  </button>
                </div>

                {/* ERROR MESSAGE */}
                {error && (
                  <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                {/* SUCCESS MESSAGE */}
                {successMessage && (
                  <div className="bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg text-sm">
                    {successMessage}
                  </div>
                )}

                {/* LOGIN BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Signing In..." : "Login to your account"}
                </button>

                {/* GOOGLE LOGIN */}
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  disabled={loading}
                  className="w-full border border-gray-300 dark:border-gray-600 py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                 <div className="flex gap-2 justify-center items-center ">
                    <FcGoogle /> Sign In With Google
                    </div>
                </button>

                {/* SIGNUP */}
                <div className="text-sm text-center">
                  Don’t have an account?{" "}
                  <Link to="/signup" className="text-blue-500 hover:underline">
                  
Sign up

                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignInPage;
