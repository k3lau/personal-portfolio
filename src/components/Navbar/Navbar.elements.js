import styled from "styled-components";
import { Container } from "../../theme/GlobalStyles";
import { FaMagento } from "react-icons/fa";

export const Nav = styled.nav`
  background-color: transparent;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  font-style: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const MobileIcon = styled.div`
  display: none;
  color: white;
  @media screen and (max-width: 780px) {
    display: block;
    background-color: grey;
    color: #fff;
    opacity: 0.5;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    cursor: pointer;
    padding: 20px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 780px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? "-100%" : 0)};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 780px) {
    width: 100%;
    padding: 0.25rem 0.25rem;
    height: 100px;
  }
`;

