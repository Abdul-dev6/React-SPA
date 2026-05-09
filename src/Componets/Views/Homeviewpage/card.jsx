import React from "react";

function card() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 p-5 lg:px-10 lg:py-16 max-w-screen-xl mx-auto relative z-10">
        {/* Card 1 */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl text-gray-900 dark:text-white block w-full max-w-sm p-8 rounded-3xl border border-white dark:border-gray-700 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] hover:-translate-y-2 transition-all mx-auto lg:mx-0 group relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-blue-500/30 transform group-hover:rotate-12 transition-transform">
            <i className="fa-solid fa-layer-group text-2xl"></i>
          </div>
          <h5 className="mb-4 text-2xl font-extrabold tracking-tight">
            Seller Dashboard Platform
          </h5>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            This platform allows sellers to add products across multiple
            websites, analyze sales and revenue, and generate detailed reports
            to track performance.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
          >
            Learn More
            <i className="fa-solid fa-arrow-right ms-2 transform group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl text-gray-900 dark:text-white block w-full max-w-sm p-8 rounded-3xl border border-white dark:border-gray-700 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] hover:-translate-y-2 transition-all mx-auto lg:mx-0 group relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-indigo-500/30 transform group-hover:rotate-12 transition-transform">
            <i className="fa-solid fa-chart-line text-2xl"></i>
          </div>
          <a href="#">
            <h5 className="mb-3 text-2xl font-extrabold tracking-tight">
              Analytics Guide
            </h5>
          </a>
          <p className="mb-5 text-gray-600 dark:text-gray-400 leading-relaxed">
            Learn step-by-step how to add products, manage multiple websites,
            analyze sales data, and generate reports to track your business
            growth.
          </p>
          <a
            href="#"
            className="inline-flex font-bold items-center text-indigo-600 dark:text-indigo-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
          >
            See the guide
            <i className="fa-solid fa-arrow-right ms-2 transform group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl text-gray-900 dark:text-white block w-full max-w-sm p-8 rounded-3xl border border-white dark:border-gray-700 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(236,72,153,0.15)] hover:-translate-y-2 transition-all mx-auto lg:mx-0 group relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-purple-500/30 transform group-hover:rotate-12 transition-transform">
            <i className="fa-solid fa-globe text-2xl"></i>
          </div>
          <h5 className="mt-2 mb-3 text-2xl font-extrabold tracking-tight">
            Manage Multi-Sites
          </h5>
          <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
            Add new products, update inventory, analyze sales data, and generate
            reports all in one platform designed for multi-channel sellers.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-purple-600 dark:text-purple-400 font-bold group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors"
          >
            Explore Features
            <i className="fa-solid fa-arrow-right ms-2 transform group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default card;
