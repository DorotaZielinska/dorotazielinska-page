import { Link } from "react-router-dom/cjs/react-router-dom";
import styled from "styled-components";

export const StyledMenu = styled.nav`
  background-color: ${({ theme }) => theme.slidebar.background};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  width: 100%;
  height: 14%;
  text-align: left;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 0.5rem;
  }
`;

export const NavigationMenuList = styled.ul`
  width: 100%;
  margin-left: 50px;
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}) {
    margin-left: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const NavigationMenuItems = styled.li`
  list-style: none;
  padding: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: flex;
    justify-content: start;
    align-items: center;
  }
`;

export const StyledNavLink = styled(Link)`
  font-family: "Grandiflora One", cursive;
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: ${({ theme }) => theme.links.text};
  text-decoration: none;
  transition: color 0.3s linear;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}) {
    font-size: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    font-size: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding: 1rem 0;
    text-align: center;
    justify-content: center;
  }
  &:hover {
    color: ${({ theme }) => theme.hover.text};
  }
`;
