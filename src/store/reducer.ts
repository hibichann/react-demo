// const defaultState = {
// 	num: 20,
// }
let reducer = (state = { num: 20 }, action: { type: string; val: number }) => {
	let newState = JSON.parse(JSON.stringify(state))
	switch (action.type) {
		case "add1":
			newState.num++
			break
		case "add2":
			newState.num += action.val
			break
		default:
			return newState
	}
	return newState
}
export default reducer
