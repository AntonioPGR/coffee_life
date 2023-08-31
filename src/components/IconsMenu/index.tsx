import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";
import { flex_center, flex_right } from "themes/default_styles";

export default function IconsMenu() {
	return (
		<StyledNav>
			<a href='/Cart'>
				<FontAwesomeIcon icon={faCartShopping} size='xl' />
			</a>
		</StyledNav>
	);
}

const StyledNav = styled.nav`
	${flex_right}

	a {
		${flex_center}
		width: 2rem;
		height: 2rem;
	}
`;
