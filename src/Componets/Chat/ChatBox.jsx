import React, { useState, useEffect, useRef } from "react";

import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";

import { db } from "../FireBase/Firebase";
import { useAuth } from "../context/AuthContext";

const ChatBox = ({ selectedUser }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const { currentUser } = useAuth();

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!selectedUser || !currentUser) return;

    // IMPORTANT FIX
    const recipientId = selectedUser.id;

    // UNIQUE CHAT ID
    const chatId =
      currentUser.uid < recipientId
        ? `${currentUser.uid}_${recipientId}`
        : `${recipientId}_${currentUser.uid}`;

    // REALTIME QUERY
    const q = query(
      collection(db, "messages"),
      where("chatId", "==", chatId),
      orderBy("createdAt", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedMessages = [];

      snapshot.forEach((doc) => {
        fetchedMessages.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setMessages(fetchedMessages);
    });

    return () => unsubscribe();
  }, [selectedUser, currentUser]);

  // SEND MESSAGE
  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!newMessage.trim()) return;

    try {
      const recipientId = selectedUser.id;

      const chatId =
        currentUser.uid < recipientId
          ? `${currentUser.uid}_${recipientId}`
          : `${recipientId}_${currentUser.uid}`;

      await addDoc(collection(db, "messages"), {
        chatId,
        senderId: currentUser.uid,
        receiverId: recipientId,
        text: newMessage,
        createdAt: serverTimestamp(),
      });

      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // FORMAT TIME
  const formatTime = (timestamp) => {
    if (!timestamp) return "";

    return new Date(
      timestamp.seconds * 1000
    ).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // NO USER SELECTED
  if (!selectedUser) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>Select a user to start chatting</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">

      {/* HEADER */}
      <div className="p-4 border-b">
        <h2 className="font-bold text-lg">
          {selectedUser.fullName}
        </h2>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => {
          const isMe =
            msg.senderId === currentUser.uid;

          return (
            <div
              key={msg.id}
              className={`flex ${
                isMe
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] px-4 py-2 rounded-xl ${
                  isMe
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                <p>{msg.text}</p>

                <p className="text-xs mt-1 opacity-70 text-right">
                  {formatTime(msg.createdAt)}
                </p>
              </div>
            </div>
          );
        })}

        <div ref={messagesEndRef} />
      </div>

      {/* INPUT */}
      <form
        onSubmit={handleSendMessage}
        className="p-4 border-t flex gap-2"
      >
        <input
          type="text"
          placeholder="Type message..."
          value={newMessage}
          onChange={(e) =>
            setNewMessage(e.target.value)
          }
          className="flex-1 border rounded-lg px-4 py-2"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBox;