import React from "react";

import { Container, Title } from "./styles";

const Section = ({ data }) => {
  const { id, title, color } = data;

  return (
    <Container id={id} color={color}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Section;
