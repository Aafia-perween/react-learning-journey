import React, { useState } from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  // State for saving and showing apply form
  const [isSaved, setIsSaved] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Toggle Save button
  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  // Show the Apply form
  const handleApply = () => {
    setShowForm(true);
  };

  // Close the Apply form
  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="card border rounded-2xl p-4 shadow-md bg-white w-80 mx-auto my-4">
      {/* Top Section */}
      <div className="top flex justify-between items-center">
        <img
          src={props.brandLogo}
          alt={props.company}
          className="w-10 h-10 rounded"
        />

        {/* Save button */}
        <button
          onClick={handleSave}
          className={`text-sm px-3 py-1 rounded transition ${
            isSaved
              ? "bg-green-100 text-green-600"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {isSaved ? "Saved ✅" : <>Save <Bookmark size={12} className="inline" /></>}
        </button>
      </div>

      {/* Middle Section */}
      <div className="center mt-3">
        <h3 className="font-semibold text-lg">
          {props.company}{" "}
          <span className="text-sm text-gray-500">{props.datePosted}</span>
        </h3>
        <h2 className="text-md font-medium text-gray-800">{props.post}</h2>

        <div className="tag flex gap-2 mt-2">
          <h4 className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
            {props.tag1}
          </h4>
          <h4 className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded">
            {props.tag2}
          </h4>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom mt-4 flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-gray-800">{props.pay}</h3>
          <p className="text-sm text-gray-500">{props.location}</p>
        </div>

        {/* Apply button */}
        <button
          onClick={handleApply}
          className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 text-sm"
        >
          Apply Now
        </button>
      </div>

      {/* Apply Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <h2 className="text-xl font-semibold mb-3">
              Apply for {props.post} at {props.company}
            </h2>

            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="border p-2 rounded-md"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border p-2 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Resume Link (Drive/GitHub)"
                className="border p-2 rounded-md"
              />

              <button
                type="submit"
                className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
              >
                Submit Application
              </button>

              <button
                type="button"
                onClick={handleCloseForm}
                className="text-gray-600 text-sm underline mt-1"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
