"use client";

import Button from "src/components/Button";
import HeroText from "src/patterns/HeroText";
import { styled } from "styled-components";
import { flex_column_center } from "themes/default_styles";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
	return (
		<StyledHome>
			<HeroText />
			<Button icon={faArrowUp}> Order now </Button>
		</StyledHome>
	);
}

const StyledHome = styled.section`
	${flex_column_center}
	gap: ${p => p.theme.space.m.lg};
`;
