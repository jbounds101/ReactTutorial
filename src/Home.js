import {useState} from "react";

const Home = () => {
	const [name, setName] = useState("mario"); // This is a state hook,
	// which updates components on the UI when updated

    const handleClick = (e) => {
        console.log("Hello!");
		setName("luigi")
    }


	return (
		<div className="home">
			<h2>Homepage</h2>
			<p>{name}</p>
            <button onClick={handleClick}>Click me</button>
		</div>
	);
}

export default Home;