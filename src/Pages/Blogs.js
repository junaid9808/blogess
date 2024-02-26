import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://192.168.1.15:8000/blog/info");
      console.log(response.status, response.data);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const getToken = localStorage.getItem('token');
  
  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://192.168.1.15:8000/blog/delete/${id}`,{
        headers: {
          'token': `Bearer ${getToken}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log(`Blog with ID ${id} deleted successfully.`);
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const formatCreationTime = (timestamp) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Date(timestamp).toLocaleDateString("en-US", options);
  };

  return (
    <div>
      <h1 className="text-6xl fw-bold mt-3 mb-3">Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-5 mx-28 h-52 mb-16 pl-40 gap-5">
            <div className="card text-start border-none">
              <h5 className="card-title pt-3 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {blog.title?.slice(0, 50)}...
              </h5>
              <p className="card-description">{blog.description?.slice(0, 200)}...</p>

              <div className="flex justify-start mt-3 ml-10">
                <h1 className="pr-5">{formatCreationTime(blog.createdAt)}</h1>
                <Link
                  to={`/Blog-detailpage/${blog._id}`}
                  className="text-white bg-blue-700 hover:bg-blue-800 
                    focus:ring-4 focus:ring-blue-300 font-medium rounded-lg 
                    text-sm px-4 py-3 ml-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  View Details
                </Link>
                <button
                  className="text-end text-xl bg-black px-5 rounded ml-4 text-white"
                  type="submit"
                  onClick={() => handleDelete(blog._id)}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>

            <div className="card w-512 h-52 border-none">
              <img
                src={`http://192.168.1.15:8000/${blog.file}`}
                alt=""
                className="w-3/5 object-cover h-52"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
