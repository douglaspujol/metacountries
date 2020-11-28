import styled from 'styled-components';

export const Container = styled.div`
  border-top: 1px solid #eee;
  margin: 30px 0;
  h5 {
    font-size: 16px;
    text-transform: uppercase;
    margin: 10px;
  }
  div {
    width: 100%;
    margin: 4px 0;

    a {
      align-items: center;
      display: flex;
      border: 1px solid #ccc;
      padding: 4px;
      color: inherit;
      img {
        height: 40px;
        border-radius: 4px;
        margin-right: 5px;
      }
      &:hover {
        border: 1px solid #389cf2;
      }
    }
  }
`;
