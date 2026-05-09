import React from "react";

function Search() {
  return (
    <>
      <>
        <hr className="border-gray-200 dark:border-gray-700 my-8 w-11/12 mx-auto" />

        <h1 className="text-black flex justify-center mt-5 text-3xl font-extrabold text-blue-900">
          Product Inventory
        </h1>

        {/* PRETTY FILTER UI */}
        <div className="max-w-screen-xl mx-auto px-4 mt-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md border dark:border-gray-700">
            <h2 className=" text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
              <i className="fa-solid fa-filter"></i> Search & Filters
            </h2>

            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search & Platform */}
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <i className="fa-solid fa-magnifying-glass text-gray-500 dark:text-gray-400"></i>
                  </div>

                  <input
                    type="text"
                    id="search"
                    placeholder="Search product name..."
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  />
                </div>

                <select
                  id="filter-platform"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">All Platforms</option>
                  <option value="Amazon">Amazon</option>
                  <option value="Daraz">Daraz</option>
                  <option value="Ebay">Ebay</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="flex flex-row gap-2 items-center">
                <span className="text-gray-500 dark:text-gray-400 font-medium">
                  $
                </span>

                <input
                  type="number"
                  id="min-price"
                  placeholder="Min"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />

                <span className="text-gray-500 dark:text-gray-400">-</span>

                <input
                  type="number"
                  id="max-price"
                  placeholder="Max"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              {/* Stock & Sort */}
              <div className="flex flex-col sm:flex-row gap-4">
                <select
                  id="filter-stock"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">All Stock</option>
                  <option value="in">In Stock</option>
                  <option value="out">Out of Stock</option>
                </select>

                <select
                  id="sort-by"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">Sort By</option>
                  <option value="price-asc">Price: Low - High</option>
                  <option value="price-desc">Price: High - Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 sm:mt-0">
                <button
                  id="filter-btn"
                  className="flex-1 lg:flex-none text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 transition"
                >
                  Filter
                </button>

                <button
                  id="clear-all"
                  className="flex-1 lg:flex-none text-red-600 border border-red-600 hover:bg-red-600 hover:text-white transition font-medium rounded-lg text-sm px-4 py-2.5"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Search;
