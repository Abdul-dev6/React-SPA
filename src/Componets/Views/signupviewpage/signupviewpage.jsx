// src/pages/SignUpForm.jsx

import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  getAuth,
  fetchSignInMethodsForEmail,
} from "firebase/auth";

import {
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../../FireBase/Firebase";
const SignUpForm = () => {

  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // SIGNUP FUNCTION
  const handleSignUp = async (e) => {

    e.preventDefault();

    setError("");

    setLoading(true);

    // PASSWORD CHECK
    if (password !== confirmPassword) {

      setError("Passwords do not match");

      setLoading(false);

      return;
    }

    // PASSWORD LENGTH CHECK
    if (password.length < 6) {

      setError("Password must be at least 6 characters");

      setLoading(false);

      return;
    }

    try {

      // CHECK IF EMAIL ALREADY EXISTS IN FIREBASE AUTH
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      if (signInMethods.length > 0) {

        setError("Email already registered. Please sign in instead.");

        setLoading(false);

        return;
      }

      // CHECK IF EMAIL EXISTS IN FIRESTORE
      const userQuery = await getDoc(doc(db, "emails", email));

      if (userQuery.exists()) {

        setError("Email already registered. Please sign in instead.");

        setLoading(false);

        return;
      }

      // CREATE USER
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      const user = userCredential.user;

      // SAVE USER IN FIRESTORE
      await setDoc(
        doc(db, "users", user.uid),
        {
          uid: user.uid,
          fullName: fullName,
          email: email,
          role: "user",
          createdAt: new Date(),
        }
      );

      // CREATE EMAIL INDEX FOR QUICK LOOKUP
      await setDoc(doc(db, "emails", email), {
        uid: user.uid,
      });

      console.log("Created user:", user);

      alert("Account Created Successfully! Please sign in.");

      setLoading(false);

      navigate("/signin");

    } catch (error) {

      console.log(error);

      // HANDLE SPECIFIC FIREBASE ERRORS
      if (error.code === "auth/email-already-in-use") {

        setError("This email is already registered. Please sign in or use a different email.");

      } else if (error.code === "auth/invalid-email") {

        setError("Invalid email address");

      } else if (error.code === "auth/weak-password") {

        setError("Password is too weak. Please use a stronger password.");

      } else {

        setError(error.message);

      }

      setLoading(false);
    }
  };

  return (

    <main className="flex-grow flex justify-center items-center px-4 py-12 relative z-10 w-full overflow-hidden gradient-bg text-gray-900 dark:text-white transition-colors duration-300 flex-col min-h-screen antialiased selection:bg-blue-200 dark:selection:bg-blue-800">

      <div className="w-full max-w-md bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/60 dark:border-gray-700/50 relative z-10">

        <div className="relative z-10">

          <h2 className="text-3xl font-extrabold text-center mb-2">
            Create Account
          </h2>

          <p className="text-center font-medium text-gray-500 dark:text-gray-400 mb-8">
            Join the ultimate seller platform today.
          </p>

          <form
            onSubmit={handleSignUp}
            className="flex flex-col gap-5"
          >

            {/* FULL NAME */}
            <div>

              <label className="block mb-2 text-sm font-bold">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                required
                value={fullName}
                onChange={(e) =>
                  setFullName(e.target.value)
                }
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
              />

            </div>

            {/* EMAIL */}
            <div>

              <label className="block mb-2 text-sm font-bold">
                Email Address
              </label>

              <input
                type="email"
                placeholder="example@company.com"
                required
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
              />

            </div>


            {/* PASSWORD */}
            <div>

              <label className="block mb-2 text-sm font-bold">
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
              />

              <p className="text-xs text-gray-500 mt-1">At least 6 characters</p>

            </div>

            {/* CONFIRM PASSWORD */}
            <div>

              <label className="block mb-2 text-sm font-bold">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                required
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(
                    e.target.value
                  )
                }
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
              />

            </div>

            {/* ERROR MESSAGE */}
            {error && (
              <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg mt-3 font-semibold w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
            </button>

            {/* SIGN IN */}
            <p className="text-center font-medium text-sm text-gray-600 dark:text-gray-400 mt-4">

              Already have an account?{" "}

              <Link
                to="/signin"
                className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
              >
                Sign In
              </Link>

            </p>

          </form>

        </div>

      </div>

    </main>
  );
};

export default SignUpForm;