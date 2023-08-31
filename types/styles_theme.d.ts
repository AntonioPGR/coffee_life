import 'styled-components';

declare interface ISizes{
  xlg?: string,
  lg: string,
  slg?: string,
  md: string,
  sm: string,
}

declare interface IScreenSizes extends ISizes{
  xlg: string
}

declare interface IColors{
  highlight: string,
  bg_primary: string,
  bg_secondary: string,
  bg_contrast: string,
  text_primary: string,
  text_secondary: string,
  text_contrast: string,
  success: string,
  warning: string,
  black: string,
  white: string,
}

declare interface ISpaces{
  m: ISizes,
  p: ISizes,
  border_radius: ISizes,
  border: ISizes
}

declare interface ITextSizes extends ISizes{
  titles: string,
  lg_titles: string,
  hero: string
}

declare interface ITypography{
  text: string,
  title: string,
  button: string,
  hero: string
}

declare interface IMinMaxSize{
  min: string,
  max: string,
  default: string
}

declare interface ITagSizes{
  height: IMinMaxSize,
  width: IMinMaxSize
}

declare module 'styled-components' {
  export interface DefaultTheme{
    screen_size: IScreenSizes,
    color: IColors,
    space: ISpaces,
    text_size: ITextSizes
    typography: ITypography
  }
}