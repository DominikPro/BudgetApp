import { Box } from "@mui/material";
import React from "react";
import Navigation from "../Components/Navigation/Navigation";

const Expens = () => {
	return (
		<Box sx={{ width: "100vw", height: "100vh", backgroundColor: "#FFFFFF", position: "absolute", top: 0, left: 0, zIndex: -1 }}>
			<Navigation />
			<h1>Expens</h1>
		</Box>
	);
};
export default Expens;
