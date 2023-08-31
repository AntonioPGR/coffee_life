import { styled } from "styled-components";

export default function PageContent({ children }: PropsChildren) {
	return <StyledPageContent>{children}</StyledPageContent>;
}

const StyledPageContent = styled.main`
	${props => {
		const { screen_size } = props.theme;

		return `
    max-width: ${screen_size.lg};
    margin: auto;
  `;
	}}
`;
