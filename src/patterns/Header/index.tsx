import IconsMenu from "components/IconsMenu";
import Logo from "components/Logo";
import NavMenu from "components/NavMenu";

export default function Header() {
	return (
		<header className='grid grid-cols-[1fr_auto_1fr] items-center p-6 lg:px-0 text-text-500'>
			<Logo />
			<NavMenu />
			<IconsMenu />
		</header>
	);
}
