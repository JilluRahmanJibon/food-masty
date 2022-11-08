import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsBoxArrowInUpRight } from "react-icons/bs";
const Recipes = () => {
	const [recipes, setRecipes] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/recipes")
			.then(res => res.json())
			.then(result => {
				setRecipes(result);
			});
	}, []);
	return (
		<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10 mb-10">
			{recipes.map(recipe => (
				<div key={recipe._id}>
					<div className="bg-gray-100 ">
						<img
							className="border-b-2 border-gray-400"
							src={recipe.img}
							alt=""
						/>

						<div className="px-2 pt-4">
							<Link to={`/recipe/${recipe._id}`}>
								<h1
									title="Click for Food details"
									className="text-gray-900 text-xl text-center font-bold transition-all hover:text-red-500">
									{recipe.title}
								</h1>
							</Link>
							<p className="text-gray-700 pt-4 text-justify ">
								{recipe.details.slice(0, 100)}...
							</p>
						</div>
						<div className="pt-6 pb-2  ">
							<p className="uppercase px-4 border-t flex items-center justify-between border-gray-400 border-b py-2  text-black text-sm font-bold">
								<span>Food |</span>{" "}
								<Link
									to={`/recipe/${recipe._id}`}
									title="Food Details"
									className="text-xl text-red-500 hover:text-red-600 transition-all  font-bold">
									{" "}
									<BsBoxArrowInUpRight />
								</Link>
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Recipes;
