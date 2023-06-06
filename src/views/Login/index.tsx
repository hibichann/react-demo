import { useEffect, useState } from "react"
import initLoginBg from "./init.ts"
import styles from "./login.module.scss"
import "./login.less"
import { Button, Input, Space } from "antd"
const View = () => {
	// 背景处理
	useEffect(() => {
		// login.module.scss
		initLoginBg()
		window.onresize = function () {
			initLoginBg()
		}
	}, [])
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	return (
		<div className={styles.loginPage}>
			<canvas id='canvas' style={{ display: "block" }}></canvas>
			<div className={styles.loginBox + " loginbox"}>
				<div className={styles.title}>
					<h1>通用后台系统</h1>
					<p>Strive Everyday</p>
				</div>
				<div className='form'>
					<Space direction='vertical' size='large' style={{ display: "flex" }}>
						<Input
							placeholder='用户名'
							value={username}
							onChange={(e) => setUsername(e.target.value)}></Input>
						<Input.Password
							placeholder='密码'
							value={password}
							onChange={(e) => setPassword(e.target.value)}></Input.Password>
						<Button type='primary' block>
							登录
						</Button>
					</Space>
				</div>
			</div>
		</div>
	)
}
export default View
