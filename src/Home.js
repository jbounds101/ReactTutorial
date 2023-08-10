import {useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {

	const [blogs, setBlogs] = useState(null)

	const [name, setName] = useState("mario")

	// Runs for the first render
	useEffect(() => {
		fetch("http://localhost:8000/blogs").then(res => {
			return res.json();
		}).then((data) => {
			console.log(data)
			setBlogs(data)
		});
	}, [])

	// The key inside div must be unique
	// blogs={} passes the prop into bloglist
	return (
		<div className="home">
			{blogs && <BlogList blogs={blogs} title="Silly Blog!"/>}
		</div>
	);
}

export default Home;