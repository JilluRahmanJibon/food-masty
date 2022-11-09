import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { FaStar } from "react-icons/fa";

const MyReview = () => {
	useTitle("My_Reviews");
	const { user, userLogOut } = useContext(AuthContext);
	const [myReview, setMyReview] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/myReview?email=${user?.email}`, {
			headers: {
				authorization: `Recipe ${localStorage.getItem("recipe-token")}`,
			},
		})
			.then(res => {
				if (res.status === 401 || res.status === 403) {
					return userLogOut();
				}
				return res.json();
			})
			.then(data => setMyReview(data));
	}, [user?.email, userLogOut]);
	console.log(myReview);
	return (
		<div className="py-8">
			{myReview.length ? (
				<div>
					<h1 className="text-3xl font-semibold text-center">My Reviews</h1>
					<div className="flex flex-col pt-4 gap-5">
						{myReview.map(review => (
							<div
								key={review._id}
								className="bg-gray-300 shadow-lg rounded-lg  shadow-slate-500 justify-between flex">
								<div className="flex gap-3 ">
									<PhotoProvider>
										<PhotoView src={review.recipeImg}>
											<img
												className="w-[200px] rounded-l-lg cursor-pointer"
												src={review.recipeImg}
												alt=""
											/>
										</PhotoView>
									</PhotoProvider>
									<div>
										<h2
											title="Title of food"
											className="text-gray-900  font-bold  lg:text-xl pb-2">
											{review.title}
										</h2>
										<p title="Client Review" className="text-gray-700">
											{review.message}
										</p>
										<h1 className="flex text-gray-700 items-center pt-3">
											<span className="font-semibold">Starts:</span>{" "}
											<small className="ml-2 font-bold">{review.star}</small>{" "}
											<small className="pt-1 text-red-500">
												{" "}
												<FaStar />
											</small>
										</h1>
									</div>
								</div>
								<div></div>
							</div>
						))}
					</div>
				</div>
			) : (
				<h1 className="text-3xl font-semibold text-red-500 text-center">
					No Reviews Found !
				</h1>
			)}
		</div>
	);
};

export default MyReview;
