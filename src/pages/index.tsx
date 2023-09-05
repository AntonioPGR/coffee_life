import Button from "components/Button";
import HeroText from "patterns/HeroText";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "infra/PageTitle";

export default function Home() {
	return (
		<section>
			<PageTitle title='Home' />
			<HeroText />
			<Button icon={faArrowUp}> Order now </Button>
		</section>
	);
}
