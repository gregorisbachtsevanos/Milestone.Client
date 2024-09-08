// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      white: string;
      navy: {
        50: string;
        200: string;
        500: string;
        900: string;
      };
      black: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      violet: {
        50: string;
        100: string;
        400: string;
        700: string;
      };
      red: {
        50: string;
        100: string;
        300: string;
        500: string;
        800: string;
      };
      orange: {
        50: string;
        100: string;
        300: string;
        600: string;
        800: string;
      };
      yellow: {
        50: string;
        100: string;
        500: string;
        600: string;
        900: string;
      };
      green: {
        200: string;
        400: string;
        600: string;
        700: string;
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
