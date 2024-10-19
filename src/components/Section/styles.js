import styled from 'styled-components';

export const Container = styled.div`
  height: 500px;
  background-color: ${({ color }) => color};
  padding: 10px 20px;
`;

export const Title = styled.h1`
  font-size: 42px;
  color: #fff;
  font-weight: 600;
  margin: 0px;
  padding: 0px;
`;
