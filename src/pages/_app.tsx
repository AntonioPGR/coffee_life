import PageContainer from "components/PageContainer";
import PageContentContainer from "components/PageContentContainer";
import type { AppProps } from "next/app";
import Footer from "patterns/Footer";
import Header from "patterns/Header";
import Providers from "providers";
import "styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Providers>
			<PageContainer>
				<Header />
				<PageContentContainer>
					<Component {...pageProps} />
				</PageContentContainer>
				<Footer />
			</PageContainer>
		</Providers>
	);
}
