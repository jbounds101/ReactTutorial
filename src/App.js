import NavBar from './NavBar'; // This is another component that is imported
import Home from './Home';

function App() {

	// This is JSX, not HTML
	// Curly braces denote the use of a variable inside JSX
	return (
		<div className="App">
			<NavBar/>
			<div className="content">
				<Home/>
			</div>
		</div>
	);
}

export default App; // Export the template so it can be used elsewhere
