import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
//resets styles
injectGlobal`
  ${reset}

  body {
    margin: 0;
    border: 0;
    padding: 0;
    font-family: 'Roboto';
  }
`;


