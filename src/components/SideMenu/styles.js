import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  background-color: blue;
  height: 100vh;
  width: 210px;
  padding: 10px 20px;
  background-color: #1c1d22;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0px;
`;

export const SectionItem = styled.li`
  height: 30px;
  margin: 20px 0;

  a {
    transition: all 0.3s;
    color: ${({ active }) => (active ? "#ff00af" : "#fff")};
    font-size: 22px;
    text-decoration: none;
  }

  :hover {
    a {
      color: #ff00af;
    }
  }
`;
