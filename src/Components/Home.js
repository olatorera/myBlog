import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

   useEffect(() => {
    fetch("http://localhost:4000/api/blogs")
    .then(res => {
      if (!res.ok) {
        throw Error('could not fetch data for that resource');
      }
      return res.json();
    })
    .then(data => {
      setBlogs(data);
      setIsPending(false);
      setError(null);
    })
    .catch(err => {
      setIsPending(false);
      setError(err.message);
    }) 
  }, []);

  return (
    <div className="homepage">
      {error && <div>{ error }</div>}
      {isPending && <div>Loading ....</div>}
      {blogs &&  <BlogList blogs={blogs} title="All Blogs!!!" /> }
    </div>
  );
};

export default Home;
