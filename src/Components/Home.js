import React, { useState } from "react";

const Home = () => {
  const [blog, setBlog] = useState([
    { title: "My new Page", body: "lorem ipsum ...", author: "TeeDev", id: 1 },
    { title: "My new Page", body: "lorem ipsum ...", author: "Paul", id: 2 },
    { title: "My new Page", body: "lorem ipsum ...", author: "Abayomi", id: 3 },
  ]);

  return (
    <div className="homepage">
      {blog.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <h4>{blog.body}</h4>
        </div>
      ))}
    </div>
  );
};

export default Home;
