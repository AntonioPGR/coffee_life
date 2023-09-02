import IconsMenu from "src/components/IconsMenu";
import Logo from "src/components/Logo";
import NavMenu from "src/components/NavMenu";
import { styled } from "styled-components";

export default function Header() {
	return (
		<StyledHeader>
			<Logo />
			<NavMenu />
			<IconsMenu />
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	padding: ${p => p.theme.space.p.lg};
	display: grid;
	grid-template-columns: 1fr auto 1fr;
`;
