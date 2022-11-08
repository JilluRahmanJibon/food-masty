import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const HomeRecipes = () => {
	return (
		<div className="mb-16 mt-28">
			<div className="flex  justify-between items-center border-b border-gray-400 pb-5">
				<h1 className="sm:text-4xl text-xl font-semibold">RECENT ADDED</h1>
				<Link
					title="View all recipes"
					to="/recipes"
					className="flex items-center bg-red-500 py-2 px-3 rounded-md hover:bg-red-600 text-white">
					<span>View more</span> <FiArrowUpRight />
				</Link>
			</div>

			<div>fsklfdkls</div>
		</div>
	);
};

export default HomeRecipes;
