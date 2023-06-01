import {
	DesktopOutlined,
	FileOutlined,
	PieChartOutlined,
	TeamOutlined,
	UserOutlined,
} from "@ant-design/icons"
import type { MenuProps } from "antd"
import { ItemType } from "antd/es/menu/hooks/useItems"
import { useNavigate } from "react-router-dom"
import { Menu } from "antd"
import { useState } from "react"

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
const MainMenu = () => {
	const [openKeys, setOpenKeys] = useState([] as string[])
	const navigate = useNavigate()
	const menuClick = (e: ItemType) => {
		console.log(e?.key)
		navigate(e?.key as string)
	}
	const handleChange = (Keys: string[]) => {
		setOpenKeys([Keys[Keys.length - 1]])
	}
	return (
		<Menu
			theme='dark'
			defaultSelectedKeys={["/page1"]}
			mode='inline'
			items={items}
			onClick={menuClick}
			onOpenChange={handleChange}
			openKeys={openKeys}
		/>
	)
}
export default MainMenu
