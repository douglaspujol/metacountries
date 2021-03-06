import styled from 'styled-components';

export const Container = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      max-width: 300px;
      border: 1px solid #eee;
      border-radius: 4px;
      padding: 10px;
      margin: 10px;
      &:hover {
        border: 1px solid #389cf2;
      }
      img {
        max-width: 150px;
        box-shadow: 9px 6px 10px -9px rgba(0, 0, 0, 0.32);
      }

      h4 {
        max-width: 100%;
        font-size: 16px;
        font-weight: 700;
        margin: 10px 0;
      }
      p {
        font-size: 14px;
      }
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        padding: 0 20px;
        height: 40px;
        line-height: 25px;
        text-align: center;
        border: 1px solid #389cf2;
        background-color: #fff;
        color: #389cf2;
        font-size: 14px;
        text-transform: uppercase;
        border-radius: 2px;
        cursor: pointer;
        outline: 0;
        transition: all 0.2s;
        &:hover {
          background-color: #389cf2;
          color: #fff;
        }
      }
    }
  }
`;
