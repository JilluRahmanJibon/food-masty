import React from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";

const Recipes = () => {
	return (
		<div>
			<div>
				<h1>Popular Recipes</h1>
				<Link>
					View more <BsArrowUpRight />
				</Link>
			</div>
		</div>
	);
};

export default Recipes;
