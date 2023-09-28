import { createBrowserRouter } from "react-router-dom";

import HomePage from "../routes/HomePage";
import ErrorPage from "../routes/ErrorPage";
import Contacts from "../routes/Contacts";

export default function Router() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage />,
			errorElement: <ErrorPage/>
		},
		{
			path: "/contacts",
			element: <Contacts />
		}
	]);

	return router
}