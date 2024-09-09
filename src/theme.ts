import styled, { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  palette: {
    white: "#F8F8F8", // white
    yellow: {
      500: "#CDEF4F", // yellowGreen
    },
    black: {
      500: "#2D2D2D", // lightBlack
      600: "#212121", // mediumBlack
      700: "#232323", // darkBlack
      800: "#1A1A1A", // darkerBlack
      900: "#151515", // darkestBlack
    },
    green: {
      700: "#152024", // darkGreen
    },
    gray: {
      500: "#D4D4D4", // gray
    },
  },
  sizes: {
    smallMobile: "max-width:420px",
    mobile: "min-width:421px",
    tablet: "min-width:501px",
    laptop: "min-width: 900px",
    desktop: "min-width:1300px",
  },
  maxWidth: "500px",
  pagePadding: "6%",
};

export const Title2Xl = styled.h1`
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  margin: 0;
`;

export const TitleXl = styled.h2`
  font-weight: 700;
  font-size: 30px;
  line-height: 32px;
  margin: 0;
`;

export const TitleLg = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin: 0;
`;

export const TitleMd = styled.h4`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin: 0;
`;

export const Title = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  margin: 0;
`;

export const TitleSecondary = styled.h5`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  margin: 0;
`;

export const Text = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

export const BodyTitle = styled.h4`
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.5px;
  margin: 0;
`;

export const Badge = styled.span`
  font-weight: 400;
  font-size: 11px;
  line-height: 12px;
`;

export const Caption = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

export const CaptionTitle = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
`;

export const LinkStyle = styled.span`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  text-decoration: underline;
`;

export const Emojis = styled.div`
  font-size: 43px;
  font-weight: 400;
  line-height: 43px;
  letter-spacing: 0.5px;
  text-align: left;
`;
