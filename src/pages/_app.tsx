import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { Provider } from "react-redux";
import { store } from "../toolkitRedux/index";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</Layout>
	)
}
