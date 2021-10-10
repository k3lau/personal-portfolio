import styled from "styled-components";
import { Link } from 'react-router-dom';

export const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const FooterContainer = styled.footer`
  background-color: #0d0909;
`;


export const SocialDescription = styled.h4`
  font-weight: 100;
  font-size: 1rem;
  color:#fff;
`;

export const FooterIntro = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  color: #fff;
`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

export const EmailFormButton = styled.button`
  background-color: transparent;  
  color: #fff;
  font-size: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;