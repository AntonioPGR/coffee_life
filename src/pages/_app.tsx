import PageContent from "components/PageContent";
import type { AppProps } from "next/app";
import Footer from "patterns/Footer";
import Header from "patterns/Header";
import Providers from "providers";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Providers>
			<Header />
			<PageContent>
				<Component {...pageProps} />
			</PageContent>
			<Footer />
		</Providers>
	);
}
