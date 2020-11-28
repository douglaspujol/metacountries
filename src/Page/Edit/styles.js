import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  div {
    margin-right: 30px;
    img {
      margin: 15px 0;
      max-width: 300px;
      border-radius: 4px;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    label {
      font-weight: 700;
      margin: 10px 0;
      input {
        width: 100%;
        height: 40px;
        padding: 0 10px;
        margin-top: 5px;
        background-color: #fff;
        border: 1px solid #ccc;
        outline: 0;
        transition: 0.2s;
        &:focus {
          border: 1px solid #389cf2;
        }
      }
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
    &:last-child {
      background: none;
      font-size: 10px;
      margin-top: 10px;
      color: #333;
      transition: 0.2s;
      &:hover {
        color: #389cf2;
      }
    }
  }
`;
