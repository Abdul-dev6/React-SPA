import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/photos/favicon.png";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut, deleteUser } from "firebase/auth";
import { auth } from "../FireBase/Firebase";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/signin");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (confirmDelete && user) {
      try {
        const uid = user.uid;
        const email = user.email;

        // Clean up Firestore documents first while the user is still authenticated
        if (uid) {
          await deleteDoc(doc(db, "users", uid));
        }
        if (email) {
          await deleteDoc(doc(db, "emails", email));
        }

        // Finally, delete the Firebase Auth user
        await deleteUser(user);
        
        alert("Account deleted successfully.");
        navigate("/signup");
      } catch (error) {
        if (error.code === "auth/requires-recent-login") {
          alert("Please sign in again to verify your identity before deleting your account.");
          await signOut(auth);
          navigate("/signin");
        } else {
          alert(error.message);
        }
      }
    }
  };

  return (
    <nav className="bg-slate-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold flex items-center gap-2">
        <img src={logo} alt="logo" className="w-8 h-8" />
        SalesVista
      </div>

      <div className="flex gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-gray-200">
          Home
        </Link>
        <Link to="/crud" className="hover:text-gray-200">
          Crud
        </Link>

        <Link to="/create" className="hover:text-gray-200">
          Add Product
        </Link>

        <Link to="/items" className="hover:text-gray-200">
          View Products
        </Link>
        {user && (
          <Link to="/chat" className="hover:text-gray-200 font-bold text-blue-400">
            Chat
          </Link>
        )}
        {user ? (
          <>
            <span className="text-gray-300">Hello, {user.displayName || user.email}</span>
            <button onClick={handleSignOut} className="hover:text-gray-200">
              Sign Out
            </button>
            <button
              onClick={handleDeleteAccount}
              className="hover:text-red-400 text-red-500 transition-colors"
            >
              Delete Account
            </button>
          </>
        ) : (
          <>
            <Link to="/signin" className="hover:text-gray-200">
              Signin
            </Link>
            <Link to="/signup" className="hover:text-gray-200">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
