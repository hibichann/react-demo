import React from "react"
import ReactDOM from "react-dom/client"
import "reset-css"
import "@/assets/styles/global.scss"
import App from "./App.tsx"
import { BrowserRouter } from "react-router-dom"
import store from "./store/index.ts"
import { Provider } from "react-redux"
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App></App>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)
