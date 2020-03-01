import styled, { css } from 'styled-components';

import rpgWallpaper from '../../../../assets/img/rpg_wallpaper.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 40px 40px;
  align-items: start;
`;

export const FormItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${rpgWallpaper});
  margin: 10px;
  padding: 20px 10px;
  border-radius: 6px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);
  width: 300px;
  height: 200px;
  transition: all 300ms ease-in-out;
  border: 3px #8360c3 solid;

  :hover {
    transform: translateY(-5px);
  }

  ${props =>
    !props.active &&
    css`
      cursor: not-allowed;
    `}
`;

export const ImageStatus = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-end;

  img {
    width: 20px;
    height: 20px;
  }
`;
