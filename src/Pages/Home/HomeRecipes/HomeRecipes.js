import React, { useEffect, useState } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const HomeRecipes = () => {
	const [recipes, setRecipes] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/limitRecipes")
			.then(res => res.json())
			.then(result => {
				setRecipes(result);
			});
	}, []);
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className=" mt-32 border p-5 border-gray-600 rounded">
			<div className="sm:flex-row flex justify-between flex-col items-center border-b border-gray-500 pb-5">
				<h1 className="sm:text-4xl text-xl font-semibold">RECENT ADDED</h1>
				<Link
					title="View all recipes"
					to="/recipes"
					className="flex items-center bg-red-500 font-semibold py-2 mt-2 sm:mt-0 px-3 rounded-md hover:bg-red-600 text-white">
					<span>View more</span> <FiArrowUpRight />
				</Link>
			</div>

			<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 mt-10">
				{recipes.map(recipe => (
					<div key={recipe._id}>
						<div data-aos="flip-left" className="bg-gray-100 ">
							<PhotoProvider>
								<PhotoView src={recipe.img}>
									<img
										className="border-b-2 cursor-pointer border-gray-400"
										src={recipe.img}
										alt=""
									/>
								</PhotoView>
							</PhotoProvider>
							<div className="px-2 pt-4">
								<Link to={`/recipe/${recipe._id}`}>
									<h1
										title="Click for details"
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
		</div>
	);
};

export default HomeRecipes;
