import {useState, useEffect} from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

	// Data is renamed to blogs in the context of this item
	const {data: blogs, isLoading, error} = useFetch("http://localhost:8000/blogs");

	// The key inside div must be unique
	// blogs={} passes the prop into bloglist
	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isLoading && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} title="Silly Blog!"/>}
		</div>
	);
};

export default Home;