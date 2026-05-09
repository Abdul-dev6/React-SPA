import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../FireBase/Firebase.js";

function CreateProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await addDoc(collection(db, "products"), {
      productName,
      price,
      quantity,
    });

    setLoading(false);
    setSuccess(true);
    setProductName("");
    setPrice("");
    setQuantity("");

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      {/* Card */}
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="bg-slate-900 rounded-t-2xl px-8 pt-8 pb-6 border border-slate-700">
          <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-1">
            Inventory Manager
          </p>
          <h2 className="text-3xl font-bold text-white">
            New <span className="text-blue-400">Product</span>
          </h2>
        </div>

        {/* Body */}
        <div className="bg-white rounded-b-2xl px-8 py-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Product Name */}
            <div>
              <label className="block text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
                Product Name
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                  🏷️
                </span>
                <input
                  type="text"
                  placeholder="e.g. Wireless Headphones"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
                />
              </div>
            </div>

            {/* Price & Quantity Row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Price */}
              <div>
                <label className="block text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
                  Price ($)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-bold">
                    $
                  </span>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    className="w-full pl-7 pr-3 py-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
                  />
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
                  Quantity
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                    📦
                  </span>
                  <input
                    type="number"
                    placeholder="0"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                    className="w-full pl-9 pr-3 py-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
                  />
                </div>
              </div>
            </div>

            {/* Success Message */}
            {success && (
              <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-medium px-4 py-3 rounded-xl">
                <span>✅</span> Product added successfully!
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-slate-900 hover:bg-slate-700 text-white font-semibold py-3 rounded-xl transition duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Adding...
                </>
              ) : (
                <>
                  <span className="text-lg">＋</span> Add Product
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
