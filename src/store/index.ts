import { legacy_createStore } from "redux"
import reducer from "./reducer"
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 让浏览器redux-dev-tools能正常使用
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION__: any
	}
}
const store = legacy_createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store
