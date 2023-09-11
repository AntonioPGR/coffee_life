import Button from "components/Button";
import HeroText from "patterns/HeroText";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "infra/PageTitle";
import HeroImages from "patterns/HeroImages";

export default function Home() {
	return (
		<section className='flex flex-col justify-center items-center h-full gap-4'>
			<PageTitle title='Home' />
			<HeroText />
			<HeroImages />
			<Button
				onClick={() => console.log("op")}
				iconClassName='rotate-45'
				icon={faArrowUp}
			>
				Order now
			</Button>
		</section>
	);
}
