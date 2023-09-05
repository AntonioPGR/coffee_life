import Head from "next/head";

interface PropsPageTitle {
	title: string;
}

export default function PageTitle({ title }: PropsPageTitle) {
	return (
		<Head>
			<title>{`${title} - Coffe Life`}</title>
		</Head>
	);
}
