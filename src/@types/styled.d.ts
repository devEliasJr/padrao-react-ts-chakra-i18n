import "styled-components";
import light from "../styles/themes/light";
import "@chakra-ui/react";

type ThemeType = typeof light;

declare module "@chakra-ui/react" {
  export interface baseTheme extends ThemeType {}
}

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
