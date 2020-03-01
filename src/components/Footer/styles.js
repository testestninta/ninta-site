import styled from 'styled-components';

export default styled.div`
  width: 100%;
  color: #fff;
  font-style: italic;

  a {
    color: #000000;
    font-style: italic;
  }

  p {
    font-weight: 600;
  }

  .content-copyright {
    padding: 20px 0;
    background: #606c88;
    background: -webkit-linear-gradient(to left, #3f4c6b, #606c88);
    background: linear-gradient(to left, #3f4c6b, #606c88);
    width: 100%;
    font-size: 12pt;
  }

  .content-copyright span a {
    color: #7289da;
    padding: 0;
  }

  /* EFFECTS */

  .content-copyright span a:hover {
    color: #7289da81;
    border-bottom: 2px #fff solid;
  }
`;
