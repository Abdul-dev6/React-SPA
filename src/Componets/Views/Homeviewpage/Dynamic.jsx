import React from "react";

function Dynamic() {
  return (
    <>
      <div className="mb-2 border-2 border-gray-200 dark:border-gray-700 h-min-screen  text-black dark:bg-gray-800 p-10">
        <h1 className="text-black dark:text-white">Admin Panel</h1>

        {/* Input Section */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            id="field-name-input"
            placeholder="Enter the field name"
            className="p-2 rounded w-[35%] text-black dark:text-white"
          />

          <select
            id="field-type-select"
            className="p-2 rounded w-[35%] text-black dark:text-white"
            defaultValue=""
          >
            <option value="">Select type</option>
            <option value="number">Number</option>
            <option value="text">Text</option>
            <option value="boolean">Boolean</option>
          </select>

          <button
            id="add-field-btn"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded p-2 font-semibold"
          >
            Add field
          </button>

          <button
            id="clear-fields-btn"
            className="bg-red-600 hover:bg-red-700 text-white rounded px-4 py-2 font-semibold"
          >
            Clear
          </button>
        </div>

        {/* Fields Display */}
        <div className="flex flex-col">
          <h1 className="pt-5 text-black dark:text-white">Current fields</h1>

          <div
            id="admin-fields"
            className="flex flex-col gap-2 min-h-[200px] w-[50%] border-2 border-gray-200 dark:border-gray-700 p-2 rounded overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
          >
            {/* Dynamic fields will come here */}
          </div>

          <button
            id="save-config"
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded p-2 font-semibold w-[10%]"
          >
            Save Configuration
          </button>
        </div>
      </div>
      <div className="mb-2 border-2 border-gray-200 dark:border-gray-700 h-min-screen text-black dark:bg-gray-800 p-10">
        <h1 className="text-black dark:text-white">User Side</h1>

        <div id="user-fields">
          <form id="dynamic-form" className="text-white"></form>
        </div>

        <button
          id="submit-form"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded p-2 font-semibold mt-4"
        >
          Submit data
        </button>

        <div id="output"></div>
      </div>
    </>
  );
}

export default Dynamic;
