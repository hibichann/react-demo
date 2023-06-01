import { lazy } from "react"
import { Navigate } from "react-router-dom"
const About = lazy(() => import("@/views/about"))
const Home = lazy(() => import("@/views/home"))
const routes = [
	{
		path: "/",
		element: <Navigate to='/home' />,
	},
	{
		path: "/home",
		element: <Home />,
	},
	{
		path: "/about",
		element: <About />,
	},
]
export default routes
