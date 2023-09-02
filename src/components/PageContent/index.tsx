import { styled } from "styled-components";

export default function PageContent({ children }: PropsChildren) {
	return <StyledPageContent>{children}</StyledPageContent>;
}

const StyledPageContent = styled.main`
	${props => {
		const { screen_size } = props.theme;

		return `
			max-width: ${screen_size.lg};
			min-height: 100vh;
			display: grid;
			grid-template-rows: auto 1fr auto;
			margin: auto;
  	`;
	}}
`;
