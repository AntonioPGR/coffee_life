import Head from "next/head";

interface PropsHead {
	title: string;
}

export default function PageHead({ title }: PropsHead) {
	return (
		<Head>
			<meta property='og:title' content={title} key='title' />
		</Head>
	);
}
