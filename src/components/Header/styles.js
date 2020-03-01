import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 80px;
  padding: 0 60px;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to left, #8360c3, #2ebf91);
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.45);
`;

export const LogoStyle = styled.a`
  img {
    width: 40px;
  }
`;

export const Button = styled.a`
  cursor: pointer;
`;

export const LoggedButtonDiv = styled.div``;

export const LoggedButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropDown = styled.div`
  display: ${props => (props.active ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  z-index: 1;
  margin-top: 10px;
  background-color: #fff;
`;

export const DropdownItem = styled.a`
  color: #000;
  padding: 10px 20px;
  width: 100%;

  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
