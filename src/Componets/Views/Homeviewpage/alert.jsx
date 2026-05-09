import React from "react";

export default function alert() {
  return (
    <>
      <div
        className="flex items-start sm:items-center p-4 mb-4 text-sm text-green-800 rounded-lg m-2 bg-green-100 border border-green-300"
        role="alert"
      >
        <svg
          className="w-4 h-4 mr-2 shrink-0 mt-0.5 sm:mt-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <p>
          <span className="font-medium mr-1">Success alert!</span> Change a few
          things up and try submitting again.
        </p>
      </div>
    </>
  );
}
