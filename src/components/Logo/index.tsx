import { styled } from "styled-components";
import { flex_left } from "themes/default_styles";

export default function Logo() {
	return <StyledSpan>Coffee Life</StyledSpan>;
}

const StyledSpan = styled.span`
	${flex_left}
	font-size: ${p => p.theme.text_size.slg};
	color: ${p => p.theme.color.text_primary};
`;
