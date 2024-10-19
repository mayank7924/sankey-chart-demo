import React from "react";

import { Grid, BlockContainer } from "./styles";

import SideMenu from "../../components/SideMenu";
import Section from "../../components/Section";

import SectionData from "../../data/sections.json";

const Home = () => (
  <Grid style={{ marginBottom: "1000px" }}>
    <SideMenu menuItems={SectionData} />
    <BlockContainer>
      {SectionData.map((data) => (
        <Section key={data.id} data={data} />
      ))}
    </BlockContainer>
  </Grid>
);

export default Home;
