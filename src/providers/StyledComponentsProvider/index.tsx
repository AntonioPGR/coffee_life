import StyledComponentsRegistry from "src/providers/StyledComponentsProvider/registry";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "themes/global_style";
import LightTheme from "themes/light_theme";

export default function StyledComponentsProvider({ children }: PropsChildren) {
	return (
		<StyledComponentsRegistry>
			<ThemeProvider theme={LightTheme}>
				<GlobalStyles />
				{children}
			</ThemeProvider>
		</StyledComponentsRegistry>
	);
}
