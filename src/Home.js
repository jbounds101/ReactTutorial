const Home = () => {

    const handleClick = (e) => {
        console.log("Hello!");
    }

    const handleClickString = (e, name) => {
        console.log(e.screenX, name)
    }

	return (
		<div className="home">
			<h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickString(e,"YOOOO!!!")}>Click me too!</button>
		</div>
	);
}

export default Home;