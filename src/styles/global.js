import { createGlobalStyle } from 'styled-components';

import background from '../assets/img/background.jpg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
    color: #FFF;
  }

  body {
    background: url(${background});
    background-size: cover;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
  }

  ul {
    list-style-type: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }
`;
