import React from "react";
import AboutUs from "../About-us/AboutUs";
import Slider from "../Banner/Slider";
import HomeRecipes from "../HomeRecipes/HomeRecipes";

const Home = () => {
	return (
		<div>
			<Slider />
			<AboutUs />
			<HomeRecipes />
		</div>
	);
};

export default Home;
