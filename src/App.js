import "./App.css";
import Sidebar from "./compnents/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<Router>
			<div className='app'>
				<div className='app-left'>
					<Sidebar />
				</div>

				<div className='app-right'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/dashboard' element={<Dashboard />} />
						<Route path='/login' element={<Login />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
