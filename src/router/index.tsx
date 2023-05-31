// import App from "@/App"
import Home from "@/views/home"
import About from "@/views/about"
import App from "@/App"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
// BrowserRouter是history模式，HashRouter是hash模式

const baseRouter = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />}>
				<Route path='/' element={<Navigate to='/home' />}></Route>
				<Route path='/home' element={<Home />}></Route>
				<Route path='/about' element={<About />}></Route>
			</Route>
		</Routes>
	</BrowserRouter>
)
export default baseRouter
