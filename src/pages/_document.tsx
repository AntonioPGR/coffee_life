import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html className='bg-bg-100 font-text' lang='en'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='use-credentials'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Kurale&family=Lustria&family=Urbanist&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
