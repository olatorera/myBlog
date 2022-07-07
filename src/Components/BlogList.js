import React from "react";

const BlogList = ({ blogs, title }) => {
console.log(blogs)
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <h4>{blog.body}</h4>
          <button >Delete Blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
