import React, { useState } from "react"
import { Breadcrumb, Layout, theme } from "antd"
import { Outlet } from "react-router-dom"
import MainMenu from "@/Components/MainMenu"
const { Header, Content, Footer, Sider } = Layout

const Home: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false)
	const {
		token: { colorBgContainer },
	} = theme.useToken()
	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={(value) => setCollapsed(value)}>
				<div
					className='demo-logo-vertical'
					style={{ minHeight: "5vh", backgroundColor: "#aaa", margin: "1vh" }}
				/>
				<MainMenu></MainMenu>
			</Sider>
			<Layout>
				<Header style={{ padding: "0px", background: colorBgContainer }}>
					<Breadcrumb
						style={{ lineHeight: "64px", marginLeft: "16px" }}
						items={[{ title: "User" }, { title: "Bill" }]}></Breadcrumb>
				</Header>
				<Content
					style={{
						margin: "16px 16px 0",
						padding: 24,
						minHeight: 360,
						background: colorBgContainer,
					}}>
					<Outlet></Outlet>
				</Content>
				<Footer style={{ textAlign: "center", padding: 0, lineHeight: "48px" }}>
					Ant Design ©2023 Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	)
}

export default Home
