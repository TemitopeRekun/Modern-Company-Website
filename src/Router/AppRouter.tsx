import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Pricing from "../Pages/Pricing";
import Features from "../Pages/Features";
import Faq from "../Pages/Faq";
import HelpCenter from "../Pages/HelpCenter";
import Careers from "../Pages/Careers";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about-us",
				element: <AboutUs />,
			},
			{
				path: "/contact-us",
				element: <ContactUs />,
			},
			{
				path: "/pricing",
				element: <Pricing />,
			},
			{
				path: "/features",
				element: <Features />,
			},
			{
				path: "/faq",
				element: <Faq />,
			},
			{
				path: "/help-center",
				element: <HelpCenter />,
			},
			{
				path: "/careers",
				element: <Careers />,
			},
		],
	},
]);
