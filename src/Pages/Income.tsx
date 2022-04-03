import React from "react";
import Box from "@mui/material/Box";
import Navigation from "../Components/Navigation/Navigation";

const Income = () => {
	return (
		<>
			<Box sx={{ width: "100vw", height: "100vh", backgroundColor: "#FFFFFF", position: "absolute", top: 0, left: 0, zIndex: -1 }}>
				<Navigation />
				<h1>Income</h1>
			</Box>
		</>
	);
};
export default Income;
