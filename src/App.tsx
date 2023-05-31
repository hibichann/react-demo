// import { useState } from "react"
// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
// import Comp from "./Component/Comp1"
// import Comp2 from "./Component/Comp2"
import { LogoutOutlined } from "@ant-design/icons"
import { Button, DatePicker } from "antd"

function App() {
	// const [count, setCount] = useState(0)
	return (
		<div className='App' style={{ padding: "20px" }}>
			<DatePicker></DatePicker>
			<Button type='primary'>
				<LogoutOutlined />
				button
			</Button>
		</div>
	)
}

export default App
