import { ThemeProvider } from "styled-components";
import LightTheme from "themes/light_theme";

export default function StyledComponentsProvider({ children }: PropsChildren) {
	return <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>;
}
