import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiVsco, SiMedium } from "react-icons/si";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:(778) 995-4791">(778) 995-4791</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:jonchoi11@gmail.com">
            jonchoi11@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            <em>“Simplicity is the soul of efficiency.”</em> – Austin Freeman
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/jon-choi">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/jonathan-choi-0502/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://vsco.co/choisyabass/gallery">
            <SiVsco size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://medium.com/@jonchoi11">
            <SiMedium size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
