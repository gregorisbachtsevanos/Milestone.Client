// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      white: string;
      red: {
        500: string;
      };
      yellow: {
        500: string;
      };
      black: {
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      green: {
        700: string;
      };
      gray: {
        500: string;
      };
    };
    sizes: {
      smallMobile: string;
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
    maxWidth: string;
    pagePadding: string;
  }
}
