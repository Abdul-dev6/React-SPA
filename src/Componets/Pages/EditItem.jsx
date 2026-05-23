import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../FireBase/Firebase.js";
import { useAuth } from "../context/AuthContext";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        if (currentUser.role === "admin" || currentUser.uid === data.createdBy) {
          setAuthorized(true);
          setProductName(data.productName);
          setPrice(data.price);
          setQuantity(data.quantity);
        } else {
          alert("Access Denied: You cannot edit this product.");
          navigate("/items");
        }
      }
    };

    fetchProduct();
  }, [id, currentUser, navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!authorized) return;

    const docRef = doc(db, "products", id);

    await updateDoc(docRef, {
      productName,
      price,
      quantity,
    });

    alert("Product Updated Successfully");
    navigate("/items");
  };

  if (!authorized) return <div className="min-h-screen flex items-center justify-center bg-gray-100">Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
          Edit Product
        </h2>

        <form onSubmit={handleUpdate} className="space-y-5">
          <input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Product Name"
          />

          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Price"
          />

          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Quantity"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
