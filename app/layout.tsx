"use client";
import PageContent from "src/components/PageContent";
import Footer from "src/patterns/Footer";
import Header from "src/patterns/Header";
import Providers from "src/providers";
import GlobalStyles from "themes/global_style";
import StyledComponentsRegistry from "./registry";

export default function RootLayout({ children }: PropsChildren) {
	return (
		<html lang='pt-br'>
			<head>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />

				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='use-credentials'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Kurale&family=Lustria&family=Urbanist:wght@400;500&display=swap'
					rel='stylesheet'
				></link>
			</head>
			<body>
				<Providers>
					<GlobalStyles />
					<PageContent>
						<StyledComponentsRegistry>
							<Header />
							{children}
							<Footer />
						</StyledComponentsRegistry>
					</PageContent>
				</Providers>
			</body>
		</html>
	);
}
