import { useRoutes } from "react-router-dom"
import router from "./router"
import React from "react"
function App() {
	const outlet = useRoutes(router)
	return (
		<div className='App'>
			{/* 
			<Link to='/home'>Home</Link>
			<Link to='/about'>About</Link> 
			*/}
			{/* 路由页面占位符，类似于vue中的router-view */}
			<React.Suspense fallback={<div>Loading</div>}>{outlet}</React.Suspense>
		</div>
	)
}

export default App
