import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm Jonathan Choi. <br /> Welcome to My Personal Portfolio!
      </SectionTitle>
      <SectionText>
        I'm a full-stack developer and recent graduate from Lighthouse Labs. I'm
        currently seeking new opportunities and am eager to continue my growth
        as a developer.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://resume.creddle.io/resume/d8ee20j6mi0")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
