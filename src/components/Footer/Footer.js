import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  EmailFormButton,
  FooterIntro,
  SocialDescription
} from './Footer.elements';
import Contact from "./Contact"

const Footer = () => {
  const [showEmail, setShowEmail] = useState(true);

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterIntro>Let's connect !
        </FooterIntro>
        <SocialMedia>
          <SocialIcons>
            <SocialIconLink href='https://www.linkedin.com/in/kietlau3/' target='_blank' aria-label='Linkedin'>
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink href='https://github.com/k3lau' target='_blank' aria-label='Github'>
              <FaGithub />
            </SocialIconLink>
            <EmailFormButton onClick={() => setShowEmail(!showEmail)}>
              <FaEnvelope />
            </EmailFormButton>
          </SocialIcons>
        </SocialMedia>
        {showEmail ? <Contact /> : <></>}
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
