import axios from "axios";
import React, { useState } from "react";

const Write = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    const formDataObj = new FormData();
    formDataObj.append("title", formData.title);
    formDataObj.append("description", formData.description);
    formDataObj.append("file", formData.file);

    const getToken = localStorage.getItem('token');
  
    axios.post(`http://192.168.1.15:8000/blog/upload`, formDataObj, {
      headers: {
        'token': `Bearer ${getToken}`,
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        console.log("Response:", response.data);
        
        // Reset the form after successful submission
        e.target.reset();
        setFormData({
          title: "",
          description: "",
          file: null,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({
        ...formData,
        file: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  return (
    <div className="write-blog mt-5">
      <h5
        id="form-label"
        className="mb-6 font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        Write blog
      </h5>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 md:space-y-6"
        action="#"
        encType="multipart/form-data"
      >
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter the title"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter the description"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block mb-2 text-sm font-medium text-red-900 dark:text-white"
            htmlFor="file_input"
          >
            Upload file
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
        >
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default Write;
