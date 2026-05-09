import React from "react";
import { useState } from "react";
function Form() {
  const [formdata, setformdata] = useState({
    fullname: "",
    brandname: "",
    platform: "",
    email: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };
  const devent = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(formdata);
    setformdata({
      fullname: "",
      brandname: "",
      platform: "",
      email: "",
    });
  };
  return (
    <>
      <div className="p-10 flex items-center justify-center bg-gray-100">
        <form
          onSubmit={devent}
          className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg space-y-6"
        >
          <div className="flex gap-4">
            <div className="flex flex-col w-full">
              <label className="mb-1 text-sm font-semibold text-gray-600">
                Enter Full-Name
              </label>
              <input
                name="fullname"
                value={formdata.fullname}
                onChange={onChange}
                type="text"
                placeholder="Full-Name"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="mb-1 text-sm font-semibold text-gray-600">
                Brand-Name
              </label>
              <input
                name="brandname"
                value={formdata.brandname}
                onChange={onChange}
                type="text"
                placeholder="Brand-Name"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col w-full">
              <label className="mb-1 text-sm font-semibold text-gray-600">
                Platform
              </label>
              <input
                name="platform"
                value={formdata.platform}
                onChange={onChange}
                type="text"
                placeholder="Platform"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="mb-1 text-sm font-semibold text-gray-600">
                Email
              </label>
              <input
                name="email"
                value={formdata.email}
                onChange={onChange}
                type="text"
                placeholder="Email"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
