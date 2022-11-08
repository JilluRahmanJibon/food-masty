import React, { useEffect, useState } from "react";
import { BsBoxArrowUpLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

const SingleRecipe = () => {
	const [review, setReview] = useState(false);
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
			<div className="bg-gray-200 ">
				<img src={img} alt="" />
				<div className="pt-4 border-t-2 px-4 pb-4 border-gray-500">
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
				<div className="px-4 mt-3">
					<div onClick={() => setReview(!review)}>
						{review ? (
							<button className="mb-3">Hide Review Form</button>
						) : (
							<button className="mb-3">Show Review Form</button>
						)}
					</div>
					{review ? (
						<form>
							<h1 className="text-gray-900 uppercase font-semibold pb-3">
								give a review
							</h1>
							<textarea
								className="w-full px-4 py-2 outline-none focus:border-red-500 border-2 bg-white"
								name=""
								required
								id=""
								placeholder="Your Review......"
								cols="30"
								rows="10"></textarea>
							<div className="md:flex py-3 gap-8 ">
								<input
									required
									type="text"
									className="w-full px-4 py-2 md:mb-0 mb-3 outline-none focus:border-red-500 border-2 bg-white"
									placeholder="Your Name*"
								/>
								<input
									required
									type="text"
									className="w-full px-4 py-2 outline-none focus:border-red-500 border-2 bg-white"
									placeholder="Your Email*"
								/>
							</div>
							<input
								className="cursor-pointer bg-red-600 py-2 px-6 inline-block  mb-5 mt-2 rounded hover:bg-gray-900 transition-all text-white"
								type="submit"
								value="Post Review"
							/>
						</form>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
};

export default SingleRecipe;
