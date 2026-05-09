import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../FireBase/Firebase.js";

function EditProduct() {
  const { id } = useParams();

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProductName(docSnap.data().productName);
        setPrice(docSnap.data().price);
        setQuantity(docSnap.data().quantity);
      }
    };

    fetchProduct();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const docRef = doc(db, "products", id);

    await updateDoc(docRef, {
      productName,
      price,
      quantity,
    });

    alert("Product Updated Successfully");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
          Edit Product
        </h2>

        <form onSubmit={handleUpdate} className="space-y-5">
          {/* Product Name */}
          <input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Product Name"
          />

          {/* Price */}
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Price"
          />

          {/* Quantity */}
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Quantity"
          />

          {/* Button */}
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
