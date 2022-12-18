import {createGlobalStyle} from 'styled-components';
import RalewayBold from './Raleway-Bold.ttf';
import RalewayExtraBold from './Raleway-ExtraBold.ttf';
import "bootstrap-icons/font/bootstrap-icons.css"

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayBold});
    font-weight: 700;
  }

  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayExtraBold});
    font-weight: 800;
  }

  body {
    margin: 0;
    font-family: Raleway;
    font-weight: 800;
    color: #EDF5E1;
  }
`;
