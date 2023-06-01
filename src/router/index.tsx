import { lazy, Suspense } from "react"
import { Navigate } from "react-router-dom"
const About = lazy(() => import("@/views/about"))
const Home = lazy(() => import("@/views/home"))
const Page1 = lazy(() => import("@/views/page1"))
const Page2 = lazy(() => import("@/views/page2"))

const loading = (comp: JSX.Element) => (
	<Suspense fallback={<div>Loading</div>}>{comp}</Suspense>
)
const routes = [
	{
		path: "/",
		element: <Navigate to='/page1' />,
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
		],
	},
	{
		path: "/about",
		element: <About />,
	},
]
export default routes
