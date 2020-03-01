import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;

  .active-item {
    background: #8360c3 !important;
    filter: drop-shadow(0px 0 3px rgba(0, 0, 0, 0.4));
  }
`;

export const NavgationBar = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to bottom,
    rgba(131, 96, 195, 0.2),
    rgba(131, 96, 195, 0.8),
    rgba(131, 96, 195, 0)
  );
`;

export const NavigationItem = styled.a`
  cursor: pointer;
  margin: 10px 5px;
  border-radius: 20px;
  color: #fff;
  font-size: 12px;
  padding: 20px 10px;
  font-weight: 600;

  span {
    filter: drop-shadow(0px 0 3px rgba(0, 0, 0, 0.4));
  }

  svg {
    fill: #fff;
    font-size: 26px;
    margin-top: 10px;
    filter: drop-shadow(0px 0 3px rgba(0, 0, 0, 0.4));
  }

  :nth-child(1) {
    margin-top: 80px;
  }

  :hover {
    background-color: rgba(131, 96, 195, 0.6);
  }
`;

export const ComponentStyle = styled.div`
  width: 100%;
`;
