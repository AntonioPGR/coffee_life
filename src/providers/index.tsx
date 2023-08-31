import StyledComponentsProvider from "./StyledComponentsProvider";

export default function Providers({ children }: PropsChildren) {
	return <StyledComponentsProvider>{children}</StyledComponentsProvider>;
}
