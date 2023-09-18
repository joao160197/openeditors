import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Loading = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Container = styled.div`
  max-width: 700px;
  background: #ffff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin: 80px auto;
`;

export const Owner = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 30%;
    border-radius: 20%;
    margin: 20px 0;
  }

  h1 {
    font-size: 30px;
    font-weight: bolder;
    color: #0d2336;
  }

  p {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: light;
    text-align: center;
    line-height: 1.4;
    max-width: 400px;
  }
`;

export const BackButtom = styled(Link)`
  border: none;
  background: transparent;
`;

export const IssuesList = styled.ul`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px #eeee solid;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
  }

  & + li {
    margin-top: 12px;
  }

  img {
    width: 50px;
    height: auto;
    border-radius: 80px;
    border: 2px solid #0d2636;
  }

  div {
    flex: 1;
    margin-left: 12px;

    p {
      margin-top: 10px;
      font-size: 12px;
      color: black;
    }
  }

  strong {
    font-size: 15px;
  }

  a {
    text-decoration: none;
    color: #222;
    transition: 0.3s;

    &:hover {
      color: #0071db;
    }
  }

  span {
    background: #222;
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600px;
    padding: 5px 7px;
    margin-left: 14px;
  }
`;

export const PageActions = styled.div`
  background-color: transparent;
  border: none;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 10px;
    color: #ffff;
    width: 30%;
    border-radius: 20px;
    border-style: none;
    background-color: #0d2336;
    outline: 0px;
  }

  button:disabled {
    cursor: not-allowed;
    color: #c0c0c0;
    background-color: #899499;
    opacity: 0.5;
  }
`;

export const FilterList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;

  button {
    padding: 10px;
    color: #ffff;
    width: 20%;
    border-radius: 15px;
    border-style: none;
    background-color:#4682B4;
    outline: 0px;
    margin: 10px;
    outline: 0px;

    &:nth-child(${props => props.active + 1}){
      background:#EE4B2B;
    }
}
`;
