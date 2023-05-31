// import { useState } from "react"
// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
// import Comp from "./Component/Comp1"
// import Comp2 from "./Component/Comp2"
import { Outlet, Link } from "react-router-dom"
function App() {
	// const [count, setCount] = useState(0)
	return (
		<div className='App'>
			<Link to='/home'>home</Link>
			<Link to='/about'>about</Link>
			<br></br>
			{/* 路由页面占位符，类似于vue中的router-view */}
			<Outlet></Outlet>
		</div>
	)
}

export default App
