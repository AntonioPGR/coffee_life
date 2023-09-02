import { styled } from "styled-components";
import { flex_center } from "themes/default_styles";

export default function NavMenu() {
	return (
		<StyledNavMenu>
			<a href='/'>Home</a>
			<a href='/products'>Products</a>
		</StyledNavMenu>
	);
}

const StyledNavMenu = styled.nav`
	${flex_center};
	gap: ${p => p.theme.space.m.md};

	a {
		font-family: ${p => p.theme.typography.button};
		font-size: ${p => p.theme.text_size.slg};
	}
`;
