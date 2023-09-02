import { styled } from "styled-components";
import { flex_column_center } from "themes/default_styles";
export default function HeroText() {
	return (
		<StyledHeroText>
			<h1>
				We can take over the world <br /> if we have coffee
			</h1>
			<h2>
				Awaken your senses with the perfect coffee - our passion, your pleasure
			</h2>
		</StyledHeroText>
	);
}

const StyledHeroText = styled.article`
	${flex_column_center}
	gap: ${p => p.theme.space.m.lg};

	& > * {
		text-align: center;
		color: ${p => p.theme.color.text_primary};
	}

	h1 {
		font-size: ${p => p.theme.text_size.hero};
		font-family: ${p => p.theme.typography.hero};
	}

	h2 {
		font-size: ${p => p.theme.text_size.lg};
	}
`;
