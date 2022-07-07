import React from "react";
import useFetch from "../useFetch";
import BlogList from "./BlogList";

const Home = () => {

    const [data, isPending, error] = useFetch()
    console.log(data)


   return (
    <div className="homepage">
      {error && <div>{ error }</div>}
      {isPending ? <div>Loading ....</div>:
      <BlogList blogs={data} title="All Blogs!!!" /> }
    </div>
  );
};

export default Home;
