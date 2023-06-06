import { useSelector, useDispatch } from "react-redux"
import store from "@/store"

type RootState = ReturnType<typeof store.getState>

const Page1 = () => {
	const num = useSelector((state: RootState) => state.num)
	const dispatch = useDispatch()
	const changeNum = () => {
		dispatch({ type: "add2", val: 3 })
	}
	return (
		<div>
			<span>{num}</span>
			<button onClick={changeNum}>123</button>
		</div>
	)
}
export default Page1
