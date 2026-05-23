import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Componets/Layout/Navbar";
import ProtectedRoute from "./Componets/Layout/ProtectedRoute";

import Home from "./Componets/Pages/Home";
import CreateItem from "./Componets/Pages/CreateItem";
import ViewItem from "./Componets/Pages/ViewItem";
import SingleItem from "./Componets/Pages/SingleItem";
import EditItem from "./Componets/Pages/EditItem";
import Signin from "./Componets/Pages/Signin";
import Signup from "./Componets/Pages/Signup";
import CrudPage from "./Componets/Pages/Crudpage";
import ChatPage from "./Componets/Pages/ChatPage";
import { AuthProvider } from "./Componets/context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route path="/create" element={<ProtectedRoute><CreateItem /></ProtectedRoute>} />
          <Route path="/items" element={<ProtectedRoute><ViewItem /></ProtectedRoute>} />
          <Route path="/product/:id" element={<ProtectedRoute><SingleItem /></ProtectedRoute>} />
          <Route path="/edit/:id" element={<ProtectedRoute><EditItem /></ProtectedRoute>} />
          <Route path="/crud" element={<ProtectedRoute><CrudPage /></ProtectedRoute>} /> 
          <Route path="/chat" element={<ProtectedRoute><ChatPage /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
