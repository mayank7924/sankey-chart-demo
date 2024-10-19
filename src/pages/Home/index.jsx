import React from "react";

import { Grid, BlockContainer } from "./styles";

import SideMenu from "../../components/SideMenu";
import Section from "../../components/Section";

import SectionData from "../../data/sections.json";
import { useVisibleSection } from "../../hooks";

const Home = () => {
  const visibleSection = useVisibleSection(SectionData);

  return (
    <Grid>
      <SideMenu visibleSection={visibleSection} menuItems={SectionData} />
      <BlockContainer>
        {SectionData.map((data) => (
          <Section key={data.id} data={data} />
        ))}
      </BlockContainer>
    </Grid>
  );
};

export default Home;
