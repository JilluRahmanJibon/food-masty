import React, { useContext, useEffect, useState } from "react";
import { BsBoxArrowUpLeft } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../Hooks/useTitle";

const SingleRecipe = () => {
	const { user } = useContext(AuthContext);
	const [review, setReview] = useState(false);
	const { id } = useParams();
	const [recipe, setRecipe] = useState({});
	const { img, title, price, ratings, details } = recipe;
	useEffect(() => {
		fetch(`http://localhost:5000/recipes/${id}`)
			.then(res => res.json())
			.then(result => setRecipe(result));
	}, [id]);
	useTitle("Recipe_Details");

	return (
		<div className="my-8 lg:flex gap-8">
			<div className="bg-gray-200 mx-auto lg:w-3/4 md:1/2 sm:w-3/4 ">
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
				<div className="px-4 lg:block hidden mt-3">
					<div
						className="text-gray-800 font-bold"
						onClick={() => setReview(!review)}>
						{review ? undefined : (
							<button className="mb-3 inline-block">Show Review Form</button>
						)}
					</div>
					<div>
						{" "}
						{review && (
							<>
								{user?.email ? (
									<form>
										<div className="flex justify-between items-center pr-6">
											<h1 className="text-gray-900 uppercase font-semibold pb-3">
												give a review
											</h1>
											<span
												title="Hide from"
												className="cursor-pointer"
												onClick={() => setReview(!review)}>
												<FaTimes />
											</span>
										</div>
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
												defaultValue={user.displayName}
												required
												type="text"
												className="w-full px-4 py-2 md:mb-0 mb-3 outline-none focus:border-red-500 border-2 bg-white"
												placeholder="Your Name*"
											/>
											<input
												defaultValue={user.email}
												readOnly
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
									<div className="pb-3 font-bold text-gray-800">
										if you want to give a review Please
										<Link className="text-red-500 ml-2" to="/signin">
											login Now
										</Link>
									</div>
								)}
							</>
						)}
					</div>
				</div>
			</div>
			<div className="lg:w-1/4 mx-auto md:1/2 sm:w-3/4"> review here</div>
			<div className="px-4 lg:hidden block mt-8">
				<div
					className="text-gray-200 text-center font-bold"
					onClick={() => setReview(!review)}>
					{review ? undefined : (
						<button className="mb-3  inline-block">Show Review Form</button>
					)}
				</div>
				<div>
					{" "}
					{review && (
						<>
							{user?.email ? (
								<form>
									<div className="flex justify-between items-center pr-6">
										<h1 className="text-gray-200 uppercase font-semibold pb-3">
											give a review
										</h1>
										<span
											title="Hide from"
											className="cursor-pointer"
											onClick={() => setReview(!review)}>
											<FaTimes />
										</span>
									</div>
									<textarea
										className="w-full px-4 py-2 outline-none focus:border-red-500 border-2 bg-white"
										name=""
										required
										id=""
										placeholder="Your Review......"
										cols="30"
										rows="5"></textarea>
									<div className="md:flex py-3 gap-8 ">
										<input
											defaultValue={user.displayName}
											required
											type="text"
											className="w-full px-4 py-2 md:mb-0 mb-3 outline-none focus:border-red-500 border-2 bg-white"
											placeholder="Your Name*"
										/>
										<input
											defaultValue={user.email}
											readOnly
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
								<div className="pb-3 font-bold text-gray-800">
									if you want to give a review Please
									<Link className="text-red-500 ml-2" to="/signin">
										login Now
									</Link>
								</div>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default SingleRecipe;
