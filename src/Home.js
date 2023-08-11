import {useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {

	const [blogs, setBlogs] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	// Runs for the first render
	useEffect(() => {
		fetch("http://localhost:80001/blogs").then(res => {
			if (!res.ok) {
				throw Error("Could not fetch data from localhost:8000");
			}
			return res.json();
		}).then((data) => {
			setBlogs(data);
			setIsLoading(false);
			setError(null)
		}).catch(e => {
			// This occurs if loading fails
			setIsLoading(false);
			setError(e.message);
		})
	}, []);

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