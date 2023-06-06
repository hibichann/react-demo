import { useEffect, useState } from "react"
import initLoginBg from "./init.ts"
import styles from "./login.module.scss"
import "./login.scss"
import { Button, Input, Space, message } from "antd"
import { LoginAPI } from "@/request/api.ts"
import { useNavigate } from "react-router-dom"
const View = () => {
	let navigate = useNavigate()
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
	// 点击登录按钮的事件函数
	const gotoLogin = async () => {
		console.log("用户输入的用户名，密码，验证码分别是：", username, password)
		// 验证是否有空值
		if (!username.trim() || !password.trim()) {
			message.warning("请完整输入信息！")
			return
		}
		// 发起登录请求
		let loginAPIRes = await LoginAPI({
			username: username,
			password: password,
			code: "888828",
			uuid: localStorage.getItem("uuid") as string,
		})
		console.log(loginAPIRes)
		if (loginAPIRes.code === 200 || 500) {
			// TODO 没做验证码，500是验证码失效，这里直接进了
			// 1、提示登录成功
			message.success("登录成功！")
			// 2、保存token
			localStorage.setItem("lege-react-management-token", loginAPIRes.token)
			// 3、跳转到/page1
			navigate("/page1")
			// 4、删除本地保存中的uuid
			localStorage.removeItem("uuid")
		}
	}
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
						<Button type='primary' block onClick={gotoLogin}>
							登录
						</Button>
					</Space>
				</div>
			</div>
		</div>
	)
}
export default View
