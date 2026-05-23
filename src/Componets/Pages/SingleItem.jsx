import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../FireBase/Firebase.js";
import { useAuth } from "../context/AuthContext";

function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [product, setProduct] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        if (currentUser.role === "admin" || currentUser.uid === data.createdBy) {
          setAuthorized(true);
          setProduct(data);
        } else {
          alert("Access Denied: You cannot view this product.");
          navigate("/items");
        }
      }
    };

    fetchProduct();
  }, [id, currentUser, navigate]);

  if (!authorized) return <div className="min-h-screen flex items-center justify-center bg-gray-100">Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {product ? (
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-purple-600 mb-6">
            Product Details
          </h2>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              {product.productName}
            </h3>

            <p className="text-gray-600">
              💰 Price: <span className="font-medium">{product.price}</span>
            </p>

            <p className="text-gray-600">
              📦 Quantity:{" "}
              <span className="font-medium">{product.quantity}</span>
            </p>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-lg">Loading product...</p>
      )}
    </div>
  );
}

export default SingleProduct;
