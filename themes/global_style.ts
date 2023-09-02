import { createGlobalStyle } from "styled-components";

const RESET_CSS = `
  *{
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    background-color: rgba(0,0,0,0);
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

const GlobalStyles = createGlobalStyle`
  ${RESET_CSS}

  body, html{
    min-height: 100vh;
    background-color: ${props => props.theme.color.bg_primary};
    font-family: ${props => props.theme.typography.text};
  }

  a {
		color: ${props => props.theme.color.text_primary};
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`
export default GlobalStyles