import React, { useState } from "react";
import UserList from "../Chat/UserList";
import ChatBox from "../Chat/ChatBox";

const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="h-[calc(100vh-80px)] bg-gray-50 dark:bg-slate-900 pt-6 px-4 pb-6">
      <div className="max-w-6xl mx-auto h-full bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-slate-700 flex flex-col md:flex-row">
        
        {/* Left Pane - User List */}
        <div className={`w-full md:w-1/3 lg:w-1/4 h-full ${selectedUser ? "hidden md:block" : "block"}`}>
          <UserList 
            onSelectUser={setSelectedUser} 
            selectedUserId={selectedUser?.id} 
          />
        </div>

        {/* Right Pane - Chat Box */}
        <div className={`w-full md:w-2/3 lg:w-3/4 h-full ${!selectedUser ? "hidden md:block" : "block"}`}>
          <ChatBox selectedUser={selectedUser} />
          
          {/* Mobile Back Button - only shown on mobile when a chat is open */}
          {selectedUser && (
            <div className="md:hidden absolute top-4 left-4 z-20">
              <button 
                onClick={() => setSelectedUser(null)}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-2 rounded-full shadow-sm text-gray-800 dark:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ChatPage;
