import styled from 'styled-components';

export const Container = styled.div`
  max-width: 410px;
  margin: 50px auto;
  position: relative;

  button {
    margin-top: 10px;
  }
`;

export const Box = styled.div`
  border: 1px solid #d8dee2;
  padding: 20px;
  border-radius: 3px;

  div[class^='Layout-sc-'] {
    margin-bottom: 0;
  }
`;
