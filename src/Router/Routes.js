import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AddRecipe from "../Pages/AddRecipe/AddRecipe";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Pages/Login/SignIn/Signin";
import SignUp from "../Pages/Login/SignUp/Signup";
import Recipes from "../Pages/Recipes/Recipes";
import SingleRecipe from "../Pages/Recipes/SingleRecipe";
import Review from "../Pages/Reivew/Review";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/home", element: <Home /> },
			{ path: "/recipes", element: <Recipes /> },
			{ path: "/recipe/:id", element: <SingleRecipe /> },
			{ path: "/addRecipe", element: <AddRecipe /> },
			{ path: "/blog", element: <Blog /> },
			{ path: "/signup", element: <SignUp /> },
			{ path: "/signin", element: <SignIn /> },
			{ path: "/review", element: <Review /> },
		],
	},
]);
export default router;
