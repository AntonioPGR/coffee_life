import { styled } from "styled-components";
import { flex_center } from "themes/default_styles";

export default function () {
	return (
		<StyledFooter>
			<a href='https://www.linkedin.com/in/AntonioPGR' target='_blank'>
				&copy; Antonio Pacheco
			</a>
		</StyledFooter>
	);
}

const StyledFooter = styled.footer`
	${flex_center}
	padding: ${p => p.theme.space.p.md};
	a {
		font-family: ${props => props.theme.typography.button};
		font-size: ${props => props.theme.text_size.md};
	}
`;
