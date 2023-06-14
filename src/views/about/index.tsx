import { useState } from "react"

function About() {
	const [str, setStr] = useState<string>("")
	const [list, setList] = useState<{ val: string; status: boolean }[]>([])
	const mark = (val: string) => {
		const newList = list.map((todo) =>
			todo.val === val ? { ...todo, status: !todo.status } : todo
		)
		setList(newList)
	}
	return (
		<div className='a'>
			<input type='text' value={str} onChange={(e) => setStr(e.target.value)} />
			<button
				onClick={() => {
					setList([...list, { val: str, status: false }])
					setStr("")
				}}>
				Submit
			</button>
			<br></br>
			<br></br>
			<ul>
				{list.map((item, index) => (
					<li
						style={{
							textDecoration: item.status ? "line-through" : "none",
							color: item.status ? "#888" : "#000",
							display: "flex",
							justifyContent: "space-between",
							width: "235px",
						}}
						key={index}>
						{item.val}
						<div>
							<button onClick={() => mark(item.val)}>complete?</button>
							<button
								onClick={() => {
									const newList = Array.from(list)
									newList.splice(index, 1)
									setList(newList)
								}}>
								Delete
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
export default About
