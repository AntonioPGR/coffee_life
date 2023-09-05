import IconsMenu from "components/IconsMenu";
import Logo from "components/Logo";
import NavMenu from "components/NavMenu";

export default function Header() {
	return (
		<header>
			<Logo />
			<NavMenu />
			<IconsMenu />
		</header>
	);
}
