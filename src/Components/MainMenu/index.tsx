import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons"
import type { MenuProps } from "antd"
import { ItemType } from "antd/es/menu/hooks/useItems"
import { useNavigate, useLocation } from "react-router-dom"
import { Menu } from "antd"
import { useState } from "react"

// function getItem(
// 	label: React.ReactNode,
// 	key: React.Key,
// 	icon?: React.ReactNode,
// 	children?: MenuItem[]
// ): MenuItem {
// 	return {
// 		label,
// 		key,
// 		icon,
// 		children,
// 	} as MenuItem
// }

// const items: MenuItem[] = [
// 	getItem("Option 1", "/page1", <PieChartOutlined />),
// 	getItem("Option 2", "/page2", <DesktopOutlined />),
// 	getItem("User", "sub1", <UserOutlined />, [
// 		getItem("Tom", "3"),
// 		getItem("Bill", "4"),
// 	]),
// 	getItem("Team", "sub2", <TeamOutlined />, [
// 		getItem("Team 1", "6"),
// 		getItem("Team 2", "8"),
// 	]),
// ]

const items: MenuProps["items"] = [
	{
		label: "page1",
		key: "/page1",
		icon: <PieChartOutlined />,
	},
	{
		label: "page2",
		key: "/page2",
		icon: <DesktopOutlined />,
	},
	{
		label: "page3",
		key: "/page3",
		icon: <DesktopOutlined />,
		children: [
			{
				label: "page31",
				key: "/page31",
				icon: <DesktopOutlined />,
			},
			{
				label: "page32",
				key: "/page32",
				icon: <DesktopOutlined />,
			},
			{
				label: "about",
				key: "/about",
				icon: <DesktopOutlined />,
			},
		],
	},
]
const MainMenu = () => {
	let firstOpen = ""
	const navigate = useNavigate()
	const menuClick = (e: ItemType) => {
		console.log(e?.key)
		navigate(e?.key as string)
	}
	const location = useLocation()
	console.log(location)
	const findkey = (obj: ItemType) => obj?.key === location.pathname
	items.forEach((i: any) => {
		if (i?.children && i?.children.length > 1 && i?.children.find(findkey)) {
			firstOpen = i.key
			console.log(firstOpen)
		}
	})
	const [openKeys, setOpenKeys] = useState([firstOpen] as string[])
	// items[]
	const handleChange = (Keys: string[]) => {
		// 手风琴
		setOpenKeys([Keys[Keys.length - 1]])
	}
	return (
		<Menu
			theme='dark'
			defaultSelectedKeys={[location.pathname]}
			mode='inline'
			items={items}
			onClick={menuClick}
			onOpenChange={handleChange}
			openKeys={openKeys}
			style={{ userSelect: "none" }}
		/>
	)
}
export default MainMenu
