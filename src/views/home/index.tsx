import React, { useState } from "react"
import {
	DesktopOutlined,
	FileOutlined,
	PieChartOutlined,
	TeamOutlined,
	UserOutlined,
} from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Breadcrumb, Layout, Menu, theme } from "antd"
import { ItemType } from "antd/es/menu/hooks/useItems"
import { Outlet, useNavigate } from "react-router-dom"
const { Header, Content, Footer, Sider } = Layout

type MenuItem = Required<MenuProps>["items"][number]

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[]
): MenuItem {
	return {
		label,
		key,
		icon,
		children,
	} as MenuItem
}

const items: MenuItem[] = [
	getItem("Option 1", "/page1", <PieChartOutlined />),
	getItem("Option 2", "/page2", <DesktopOutlined />),
	getItem("User", "sub1", <UserOutlined />, [
		getItem("Tom", "3"),
		getItem("Bill", "4"),
		getItem("Alex", "5"),
	]),
	getItem("Team", "sub2", <TeamOutlined />, [
		getItem("Team 1", "6"),
		getItem("Team 2", "8"),
	]),
	getItem("Files", "9", <FileOutlined />),
]

const Home: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false)
	const [openKeys, setOpenKeys] = useState([] as string[])
	const navigate = useNavigate()
	const {
		token: { colorBgContainer },
	} = theme.useToken()
	const menuClick = (e: ItemType) => {
		console.log(e?.key)
		navigate(e?.key as string)
	}
	const handleChange = (Keys: string[]) => {
		setOpenKeys([Keys[Keys.length - 1]])
	}
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
				<Menu
					theme='dark'
					defaultSelectedKeys={["/page1"]}
					mode='inline'
					items={items}
					onClick={menuClick}
					onOpenChange={handleChange}
					openKeys={openKeys}
				/>
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
