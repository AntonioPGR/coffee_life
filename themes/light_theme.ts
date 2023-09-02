import {DefaultTheme} from 'styled-components'

const LightTheme: DefaultTheme = {
  screen_size: {
    sm: "320px",
    md: "768px",
    lg: "1024px",
    xlg: "1440px",
  },
  color: {
    bg_primary: "#FAF9F3",
    bg_secondary: "#D9A689",
    bg_contrast: '#260B01',
    highlight: "#260B01",
    text_primary: "#592C28",
    text_secondary: "#8C5042",
    text_contrast: "#FAF9F3",
    success: "#0E0",
    warning: "#E00",
    black: "#262626",
    white: "#EEE",
  },
  space: {
    m: {
      lg: "1.5rem",
      md: "1rem",
      sm: ".5rem",
    },
    border: {
      lg: "4px",
      md: "2px",
      sm: "1px",
    },
    border_radius: {
      lg: "1rem",
      md: ".75rem",
      sm: ".5rem",
    },
    p: {
      lg: "1.5rem",
      md: "1rem",
      sm: ".5rem",
    },
  },
  text_size: {
    hero: "3rem",
    lg_titles: "2.5rem",
    titles: "2rem",
    lg: "1.5rem",
    slg: "1.25rem",
    md: "1rem",
    sm: ".75rem",
  },
  typography: {
    button: "'Urbanist', sans-serif;",
    text: "'Lustria', serif;",
    title: "'Urbanist', sans-serif;",
    hero: "'Kurale', serif;",
  },
  size: {
    sm: "1rem",
    smd: "1.5rem",
    md: "2rem",
    slg: "3rem",
    lg: "4rem",
    xlg: "5rem"
  }
}

export default LightTheme