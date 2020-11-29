import styled from 'styled-components';

export const Label = styled.label`
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
`;
