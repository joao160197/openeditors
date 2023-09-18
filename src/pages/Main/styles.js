import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  background: #ffff;
  border-radius: 4px;
  padding: 30px;
  margin: 80px auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1px;
    border: 1px solid  ${props =>(props.error ? '#FF0000' :'grey' )};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 17px;
  }
`;

//animação do botão

const animação = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: "submit",
  disabled: props.loading,
}))`
  background: #0d2636;
  border: 0px;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0px 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${animação} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 20px;

  li {
    padding: 15px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li{
      border-top: 1px solid #eee;
    }
  }

  a {
    margin-left: 4px;
  }
`;


export const DeleteButton = styled.button.attrs({
 type: 'button'
}) `
background: transparent;
border-style: none;
padding: 8px 7px;
border-radius:0px;
outline: 0px;
`;
