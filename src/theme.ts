import styled, { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  palette: {
    white: '#ffffff',
    navy: {
      50: '#E8E9F0',
      200: '#a0a3c3',
      500: '#4c4b8a',
      900: '#292152',
    },
    black: {
      50: '#F3F2F6',
      100: '#EEEDF1',
      200: '#E5E5EA',
      300: '#B7B6BD',
      400: '#9B9AA0',
      500: '#6F737A',
      600: '#585664',
      700: '#464451',
      800: '#282733',
      900: '#050214',
    },
    violet: {
      50: '#EBECFF',
      100: '#CCCEFD',
      400: '#6672FA',
      700: '#3B41DD',
    },
    red: {
      50: '#FFE9EC',
      100: '#FFC8CD',
      300: '#F16264',
      500: '#FF0B18',
      800: '#D2000B',
    },
    orange: {
      50: '#fff2de',
      100: '#FFE0B2',
      300: '#FFB84D',
      600: '#FF8E00',
      800: '#F36C01',
    },
    yellow: {
      50: '#FEFDE7',
      100: '#fef9c4',
      500: '#FCEB3C',
      600: '#FAD935',
      900: '#f7a924',
    },
    green: {
      200: '#90E098',
      400: '#00ca48',
      600: '#00B005',
      700: '#009D00',
    },
  },
  sizes: {
    smallMobile: 'max-width:420px',
    mobile: 'min-width:421px',
    tablet: 'min-width:501px',
    laptop: 'min-width: 900px',
    desktop: 'min-width:1300px',
  },
  maxWidth: '500px',
  pagePadding: '16px',
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
