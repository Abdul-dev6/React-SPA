import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../FireBase/Firebase";
import { useAuth } from "../context/AuthContext";

const UserList = ({ onSelectUser, selectedUserId }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) return;

    // REAL-TIME USERS LIST
    const unsubscribe = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        const usersList = [];

        snapshot.forEach((doc) => {
          const data = doc.data();

          // EXCLUDE CURRENT USER
          if (doc.id !== currentUser.uid) {
            usersList.push({
              id: doc.id,
              uid: doc.id,
              ...data,
            });
          }
        });

        setUsers(usersList);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [currentUser]);

  useEffect(() => {
    if (!selectedUserId) return;

    const selectedUserStillExists = users.some((user) => user.id === selectedUserId);

    if (!selectedUserStillExists) {
      onSelectUser(null);
    }
  }, [selectedUserId, users, onSelectUser]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-gray-500">Loading users...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700">

      {/* HEADER */}
      <div className="p-4 border-b border-gray-200 dark:border-slate-700">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          Messages
        </h2>
      </div>

      {/* USERS LIST */}
      <div className="flex-1 overflow-y-auto">
        {users.length === 0 ? (
          <p className="p-4 text-center text-gray-500 dark:text-gray-400">
            No other users found.
          </p>
        ) : (
          <ul className="divide-y divide-gray-100 dark:divide-slate-700/50">
            {users.map((user) => (
              <li key={user.id}>
                <button
                  onClick={() =>
                    onSelectUser({
                      id: user.id,
                      uid: user.id,
                      ...user,
                    })
                  }
                  className={`w-full text-left p-4 flex items-center gap-3 transition ${
                    selectedUserId === user.id
                      ? "bg-blue-50 dark:bg-slate-700/80"
                      : "hover:bg-gray-50 dark:hover:bg-slate-700/40"
                  }`}
                >

                  {/* AVATAR */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                    {user.fullName
                      ? user.fullName.charAt(0).toUpperCase()
                      : "U"}
                  </div>

                  {/* USER INFO */}
                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-semibold truncate ${
                        selectedUserId === user.id
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      {user.fullName || "Unknown User"}
                    </p>

                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                      {user.email}
                    </p>
                  </div>

                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserList;