import {useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {

	const [blogs, setBlogs] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	// Runs for the first render
	useEffect(() => {
		fetch("http://localhost:8000/blogs").then(res => {
			return res.json();
		}).then((data) => {
			setBlogs(data)
			setIsLoading(false)
		});
	}, [])

	// The key inside div must be unique
	// blogs={} passes the prop into bloglist
	return (
		<div className="home">
			{isLoading && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} title="Silly Blog!"/>}
		</div>
	);
}

export default Home;