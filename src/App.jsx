import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Componets/Layout/Navbar";

import Home from "./Componets/Pages/Home";
import CreateItem from "./Componets/Pages/CreateItem";
import ViewItem from "./Componets/Pages/ViewItem";
import SingleItem from "./Componets/Pages/SingleItem";
import EditItem from "./Componets/Pages/EditItem";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/create" element={<CreateItem />} />

        <Route path="/items" element={<ViewItem />} />

        <Route path="/product/:id" element={<SingleItem />} />

        <Route path="/edit/:id" element={<EditItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
