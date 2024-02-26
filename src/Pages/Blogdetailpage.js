import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Blogdetailpage = () => {
  const [blog, setBlog] = useState({ createdAt: null });
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`http://192.168.1.15:8000/blog/get/${id}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const formatCreationTime = () => {
    if (!blog.createdAt) {
      return "Unknown"; // or handle it in another way if createdAt is not available
    }

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Date(blog.createdAt).toLocaleDateString("en-US", options);
  };

  return (
    <>
      <div key={blog._id}>
        <div>
          <div className="mt-4 justify-start text-start">
            <Link
              to="/Blogs"
              className="text-white bg-blue-700 hover:bg-blue-800
               focus:ring-4 focus:ring-blue-300 font-medium rounded-lg 
               text-sm px-3 py-3 ml-10 dark:bg-blue-600 dark:hover:bg-blue-700
               focus:outline-none dark:focus:ring-blue-800"
            >
              View Details
            </Link>
          </div>
          <h1 className="text-6xl fw-bold mt-3 mb-3">Blogs details page</h1>

          <div key={blog._id}>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5 mx-28">
              <div className="card bg-base-100 shadow-xl  border-none">
                <div className="card-body text-start pr-16">
                  <h5
                    className="card-title mb-2 mt-2 text-3xl  font-bold tracking-tight text-gray-900
                    dark:text-white"
                  >
                    {blog.title}
                  </h5>
                  <p className="card-description text-lg font-medium">
                    {blog.description}
                  </p>

                  <div className="flex justify-start mt-3 ml-10">
                    <h1 className="pr-5">{formatCreationTime()}</h1>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <img
                  src={"http://192.168.1.15:8000/" + blog.file}
                 
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogdetailpage;
