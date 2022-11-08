import React, { useEffect, useState } from "react";
import { BsBoxArrowUpLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

const SingleRecipe = () => {
	const { id } = useParams();
	const [recipe, setRecipe] = useState({});
	const { img, title, price, ratings, details } = recipe;
	useEffect(() => {
		fetch(`http://localhost:5000/recipes/${id}`)
			.then(res => res.json())
			.then(result => setRecipe(result));
	}, [id]);

	return (
		<div className="w-3/4 my-8 mx-auto">
			<div className="">
				<img src={img} alt="" />
				<div className="pt-4 bg-gray-200 border-t-2 px-4 pb-4 border-gray-500">
					<div className="text-gray-800">
						<p>Price: ${price}</p>
						<p>Ratings: {ratings}</p>
					</div>
					<h1 className="text-gray-900 pb-4 text-xl text-center font-bold transition-all hover:text-red-500">
						{title}
					</h1>
					<p className="text-gray-800">{details}</p>
					<div className="mt-3 flex justify-end">
						<Link
							title="See All Recipes."
							to="/recipes"
							className="text-red-500 text-2xl">
							{" "}
							<BsBoxArrowUpLeft />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleRecipe;
