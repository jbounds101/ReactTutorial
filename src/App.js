import NavBar from './NavBar'; // This is another component that is imported
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Create from "./Create";

function App() {
	// This is JSX, not HTML
	// Curly braces denote the use of a variable inside JSX

	// You can do wildcarding inside path
	return (
		<Router>
			<div className="App">
				<NavBar/>
				<div className="content">
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/create" element={<Create/>}/>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App; // Export the template so it can be used elsewhere
