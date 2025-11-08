import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true); // 🌙 for theme toggle

  const submitHandler = (e) => {
    e.preventDefault();

    // Avoid empty notes
    if (title.trim() === "" && details.trim() === "") return;

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  // 🗑️ Delete handler
  const deleteNote = (index) => {
    const updatedTasks = task.filter((_, idx) => idx !== index);
    setTask(updatedTasks);
  };

  return (
    <div
      className={`h-screen lg:flex ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* 📝 Form Section */}
      <form
        onSubmit={submitHandler}
        className="flex gap-4 lg:w-1/2 items-start flex-col p-10"
      >
        {/* 🌗 Theme Toggle Button */}
        <button
          type="button"
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="border px-4 py-2 rounded font-medium"
        >
          {isDarkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>

        <h1 className="text-4xl font-bold">Add Notes</h1>

        {/* Title Input */}
        <input
          type="text"
          className="px-5 py-2 border-2 font-medium rounded w-full outline-none"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Details Input */}
        <textarea
          className="px-5 py-2 h-40 font-medium border-2 rounded w-full outline-none"
          placeholder="Write Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className={`px-5 py-2 rounded outline-none font-medium w-full active:scale-95 ${
            isDarkMode ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          Add Notes
        </button>
      </form>

      {/* 🧾 Notes Display Section */}
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>

        <div className="flex flex-wrap gap-5 mt-5 overflow-auto h-full">
          {task.map((elem, idx) => (
            <div
              key={idx}
              className={`h-52 w-40 rounded-xl p-4 bg-cover bg-center relative overflow-hidden ${
                isDarkMode ? "text-black" : "text-white"
              }`}
              style={{
                backgroundImage: `url('https://cdn.pixabay.com/photo/2013/07/13/11/55/notes-158958_640.png')`,
              }}
            >
              {/* Overlay for readability */}
              <div
                className={`absolute inset-0 ${
                  isDarkMode ? "bg-white/70" : "bg-black/60"
                } rounded-xl`}
              ></div>

              {/* Note Content */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-bold text-lg">{elem.title}</h3>
                  <p className="text-sm mt-2">{elem.details}</p>
                </div>

                {/* 🗑️ Delete Button */}
                <button
                  onClick={() => deleteNote(idx)}
                  className={`mt-3 self-end px-3 py-1 rounded text-sm font-semibold ${
                    isDarkMode
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-red-500 text-white hover:bg-red-600"
                  }`}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {task.length === 0 && (
            <p className="text-gray-400 italic mt-10">No notes added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
