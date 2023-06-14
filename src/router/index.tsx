import { lazy, Suspense } from "react"
import { Navigate } from "react-router-dom"
import Home from "@/views/home"
import Login from "@/views/Login"
const About = lazy(() => import("@/views/about"))
// const Home = lazy(() => import("@/views/home"))
const Page1 = lazy(() => import("@/views/page1"))
const Page2 = lazy(() => import("@/views/page2"))
const Page31 = lazy(() => import("@/views/page3-1/page31"))

const loading = (comp: JSX.Element) => (
	<Suspense fallback={<div>Loading</div>}>{comp}</Suspense>
)
const routes = [
	{
		path: "/",
		element: <Navigate to='/page1' />,
	},
	{
		path: "/login",
		element: <Login></Login>,
	},
	{
		path: "/",
		element: <Home />,
		children: [
			{
				path: "/page1",
				element: loading(<Page1 />),
			},
			{
				path: "/page2",
				element: loading(<Page2 />),
			},
			{
				path: "/page31",
				element: loading(<Page31 />),
			},
			{
				path: "/about",
				element: loading(<About />),
			},
		],
	},
	{
		path: "*",
		element: <Navigate to='/' />,
	},
]
export default routes
