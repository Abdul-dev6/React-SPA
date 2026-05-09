import React, { useState } from "react";
import { products } from "../../database/data.js";

function CardImg() {
  const [count, setCount] = useState(0);

  const [productList, setProductList] = useState(products);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const countClear = () => {
    setCount(0);
  };
  const [formData, setFormData] = useState({
    src: "",
    platform: "",
    name: "",
    price: "",
    quantity: "",
  });

  // DELETE
  const deleteProduct = (index) => {
    const updated = productList.filter((_, i) => i !== index);
    setProductList(updated);
  };

  // OPEN EDIT MODAL
  const editProduct = (index) => {
    const item = productList[index];

    setFormData({
      src: item.src,
      platform: item.platform,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    });

    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  // INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // UPDATE PRODUCT
  const updateProduct = () => {
    const updated = [...productList];
    updated[currentIndex] = formData;

    setProductList(updated);
    setIsModalOpen(false);
  };

  return (
    <>
      {/* PRODUCT GRID */}
      <div className="mt-8 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {productList.map((item, index) => {
          const formattedQty = String(item.quantity).padStart(3, "0");

          let platformName = item.platform || "Unknown";
          if (platformName.length > 15) {
            platformName = platformName.substring(0, 15) + "...";
          }

          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border p-2"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>

                <p className="text-gray-600">${item.price}</p>
                <p className="text-gray-600">Stock: {formattedQty}</p>
                <p className="text-sm text-blue-500">{item.Platform}</p>
                <div className="flex gap-2 mt-2">
                  <span
                    onClick={increment}
                    className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-red-500"
                  >
                    +
                  </span>
                  <span className="bg-blue-500 text-white px-3 py-2 rounded">
                    {count}
                  </span>
                  <span
                    onClick={decrement}
                    className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-red-500"
                  >
                    -
                  </span>
                  <span onClick={countClear}>
                    <button className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-red-500">
                      Reset
                    </button>
                  </span>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => editProduct(index)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteProduct(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* EDIT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded w-96">
            <h2 className="text-xl font-bold mb-2">Edit Product</h2>

            <input
              type="url"
              name="src"
              value={formData.src}
              onChange={handleChange}
              placeholder="Image URL"
              className="p-2 border rounded w-full mb-2"
            />

            <input
              type="text"
              name="platform"
              value={formData.platform}
              onChange={handleChange}
              placeholder="Platform"
              className="p-2 border rounded w-full mb-2"
            />

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Product Name"
              className="p-2 border rounded w-full mb-2"
            />

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              className="p-2 border rounded w-full mb-2"
            />

            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Quantity"
              className="p-2 border rounded w-full mb-2"
            />

            <div className="flex justify-end gap-2 mt-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={updateProduct}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CardImg;
