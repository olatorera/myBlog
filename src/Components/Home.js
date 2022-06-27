import React, { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
   const [blogs, setBlogs] = useState([
    { title: "My new Page", body: "lorem ipsum ...", author: "TeeDev", id: 1 },
    { title: "My new Page", body: "lorem ipsum ...", author: "Paul", id: 2 },
    { title: "My new Page", body: "lorem ipsum ...", author: "Abayomi", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="homepage">

      < BlogList blogs={blogs} title='All Blogs!!!'  handleDelete={handleDelete} /> 
    </div>
  );
};

export default Home;
