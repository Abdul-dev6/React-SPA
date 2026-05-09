import React from "react";

function ProductCard() {
  return (
    <>
      <>
        <div
          id="product-container"
          className="mt-8 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4"
        ></div>

        <hr className="border-gray-200 dark:border-gray-700 my-10 w-11/12 mx-auto" />

        <h1 className="mt-3 flex justify-center text-3xl font-extrabold text-blue-900 ">
          Add New Product
        </h1>

        <div className="flex justify-center mb-10 px-4">
          <div
            id="product-form"
            className="w-full md:w-3/4 lg:w-1/2 mt-5 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <form id="form" className="dark:text-black flex flex-col gap-4">
              <div className="flex gap-3">
                <input
                  type="url"
                  id="url"
                  placeholder="Image URL"
                  className="p-2 rounded w-full"
                  required
                />
                <input
                  type="text"
                  id="platform"
                  placeholder="Platform"
                  className="p-2 rounded w-full"
                  required
                />
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  id="name"
                  placeholder="Product Name"
                  className="p-2 rounded w-full"
                  required
                />
                <input
                  type="number"
                  id="price"
                  placeholder="Price"
                  className="p-2 rounded w-full"
                  required
                />
              </div>

              <input
                type="number"
                id="quantity"
                placeholder="Quantity"
                className="p-2 rounded w-full"
                required
              />

              <button
                type="submit"
                className="w-[20%] bg-blue-600 hover:bg-blue-700 text-white rounded p-2 font-semibold"
              >
                Add Item
              </button>
            </form>
          </div>
        </div>
      </>
    </>
  );
}

export default ProductCard;
