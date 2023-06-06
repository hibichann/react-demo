import { useSelector, useDispatch } from "react-redux"
import numStatus from "@/store/NumStatus"
import store from "@/store"

type RootState = ReturnType<typeof store.getState>

const Page1 = () => {
	const num = useSelector((state: RootState) => state.handleNum.num)
	const dispatch = useDispatch()
	const changeNum1 = () => {
		// dispatch({ type: "add1" })
		//异步写法
		// dispatch((dis: Function) => {
		// 	setTimeout(() => {
		// 		dis({ type: "add1" })
		// 	}, 1000)
		// })
		// 异步
		dispatch(numStatus.asyncActions.asyncAdd1)
	}
	const changeNum2 = () => {
		dispatch({ type: "add2", val: 3 })
	}
	const changeNum3 = () => {
		dispatch({ type: "add3", val: 10 })
	}
	return (
		<div>
			<span>{num}</span>
			<button onClick={changeNum1}>123</button>
			<button onClick={changeNum2}>123</button>
			<button onClick={changeNum3}>123</button>
		</div>
	)
}
export default Page1
