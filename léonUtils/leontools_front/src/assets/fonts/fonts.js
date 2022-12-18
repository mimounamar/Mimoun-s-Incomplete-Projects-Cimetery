import { createGlobalStyle } from 'styled-components';
import GilroyLight from './Gilroy-Light.otf';
import GilroyExtraBold from './Gilroy-ExtraBold.otf';

export const FontStyles = createGlobalStyle`
  @font-face
  {
    font-family: 'Gilroy';
    src: url(${GilroyExtraBold});
    font-weight: bold;
  }
  @font-face
  {
    font-family: 'Gilroy';
    src: url(${GilroyLight});
    font-weight: normal;
  }
`;
