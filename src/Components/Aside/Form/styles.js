import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 25px;
  }
  p {
    margin-bottom: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    input {
      width: 100%;
      height: 40px;
      padding: 0 10px;
      margin: 15px 0;
      background-color: #fff;
      border: 1px solid #ccc;
      outline: 0;
      transition: 0.2s;
      &:focus {
        border: 1px solid #389cf2;
      }
    }
    button {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: #389cf2;
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      border: none;
      border-radius: 2px;
      cursor: pointer;
      outline: 0;
    }
  }
`;
