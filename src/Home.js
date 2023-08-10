import {useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {

	const [blogs, setBlogs] = useState([
		{ title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
		{ title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
		{ title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
	])

	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		setBlogs(newBlogs);
	}

	// Runs for every render, beware of rerendering because this can cause a loop
	useEffect(() => {
		console.log("use effect ran")
	})

	// The key inside div must be unique
	// blogs={} passes the prop into bloglist
	return (
		<div className="home">
			<BlogList blogs={blogs} title="Silly Blog!" handleDelete={handleDelete} />
			<BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's Blog!" handleDelete={handleDelete} />
		</div>
	);
}

export default Home;