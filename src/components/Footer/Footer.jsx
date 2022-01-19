import React from 'react';

import { footerLinks } from '../../constans';

import Logo from '../../images/Logo.svg';
import Facebook from '../../images/facebook.svg';
import Instagram from '../../images/instagram.svg';
import Twitter from '../../images/twitter.svg';

import {
  Wrapper,
  FooterHeader,
  AddressSide,
  FooterLogo,
  Address,
  Phone,
  Mail,
  LinksSide,
  SupContainer,
  SupLink,
  SubContainer,
  SubLink,
  FooterLine,
  Container,
  SocialContainer,
  Social,
  SocialIcon,
  Copyright,
  Legals,
} from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <FooterHeader>
        <AddressSide>
          <FooterLogo src={Logo} />
          <Address>
            2464 Royal Ln undefined Mesa, New Jersey 45463 United States.
          </Address>
          <Phone>(208) 555-0112</Phone>
          <Mail>nevaeh.simmons@example.com</Mail>
        </AddressSide>
        <LinksSide>
          <SupContainer>
            {footerLinks.map(sup => (
              <SupLink key={sup.id}>
                <p>{sup.title}</p>
                <SubContainer>
                  {sup.subLinks.map(sub => (
                    <SubLink key={sub.id}>
                      <a href={sub.subLink}>{sub.subTitle}</a>
                    </SubLink>
                  ))}
                </SubContainer>
              </SupLink>
            ))}
          </SupContainer>
        </LinksSide>
      </FooterHeader>
      <FooterLine />
      <Container>
        <SocialContainer>
          <Social>
            <SocialIcon src={Facebook} />
          </Social>
          <Social>
            <SocialIcon src={Twitter} />
          </Social>
          <Social>
            <SocialIcon src={Instagram} />
          </Social>
        </SocialContainer>
        <Copyright>Copyright &copy; 2020 Themesmile</Copyright>
        <Legals>
          <a href="#">Legals </a> | <a href="#"> Term & Conditions </a> |
          <a href="#"> License</a>
        </Legals>
      </Container>
    </Wrapper>
  );
};

export default Footer;
