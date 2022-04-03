import React from "react";
import { Routes, Route } from "react-router-dom";
import Budget from "./Pages/Income";
import HomePage from "./Pages/HomePage";
import Expens from "./Pages/Expens";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="Incom" element={<Budget />} />
				<Route path="Expens" element={<Expens />} />
			</Routes>
		</>
	);
}

export default App;
