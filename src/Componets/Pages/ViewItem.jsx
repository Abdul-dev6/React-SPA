import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../FireBase/Firebase.js";

function ViewProducts() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        All Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
          >
            {/* Product Name */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {product.productName}
            </h3>

            {/* Price */}
            <p className="text-gray-600">
              💰 Price: <span className="font-medium">{product.price}</span>
            </p>

            {/* Quantity */}
            <p className="text-gray-600 mb-4">
              📦 Quantity:{" "}
              <span className="font-medium">{product.quantity}</span>
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2">
              <Link
                to={`/product/${product.id}`}
                className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600"
              >
                View
              </Link>

              <Link
                to={`/edit/${product.id}`}
                className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewProducts;
