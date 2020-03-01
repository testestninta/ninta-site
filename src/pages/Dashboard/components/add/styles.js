import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  .max-container {
    padding: 50px 20px;
    display: flex;
    align-content: top;
  }
`;

export const SubContainer = styled.div`
  padding: 100px 40px 20px 40px;
`;

export const ErrorContainer = styled.div`
  position: absolute;
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 8px;

  ${props =>
    props.error &&
    css`
      background-color: #1b998b;
      box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.1);
    `}
`;

export const FormContainer = styled.div`
  display: flex;
  padding: 10px 0;
  align-items: center;
  ${props =>
    props.inline &&
    css`
      flex-direction: column;
    `}
`;

export const Label = styled.label`
  color: #000;
  font-size: 16px;
  padding: 0 10px;

  span {
    padding: 4px;
    color: red;
  }
`;

export const InputStyle = styled.input`
  text-align: left;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 600px;
  color: #000;
`;

export const InputButton = styled.button`
  cursor: pointer;
  font-size: 20px;
  padding: 5px 10px;
  color: #000;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.05);
  border: 2px #bebdbf solid;
`;

export const Success = styled.div`
  display: none;

  h2 {
    color: #000;
    padding: 20px 0;
  }

  ${props =>
    props.active &&
    css`
      display: flex;
      flex-direction: column;
    `}
`;

export const SuccessButton = styled.button`
  cursor: pointer;
  font-size: 20px;
  padding: 5px 10px;
  color: #000;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.05);
  border: 2px #bebdbf solid;

  :hover {
    background-color: #f0f0f0;
  }
`;
