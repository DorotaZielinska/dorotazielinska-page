import styled from "styled-components";
import { ReactComponent as IconGitHub } from "../Icons/footerGitHubIcon.svg";
import { ReactComponent as LinkedInIcon } from "../Icons/linkedIcon.svg";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: 40px 0 0 31px;
  gap: 16px;
  position: fixed;
  z-index: 12;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    gap: 10px;
  }
`;

export const IconFooterGitHub = styled(IconGitHub)`
  width: 32px;
  height: 32px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 26px;
    height: 26px;
    &:hover {
      transform: scale(1.2);
      transition: 0.3s ease;
    }
  }
`;

export const IconLickedIn = styled(LinkedInIcon)`
  width: 32px;
  height: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 26px;
    height: 26px;
  }
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.primary.text};
  font-size: 1.2rem;
  writing-mode: vertical-lr;
  cursor: pointer;
  fill: ${({ theme }) => theme.primary.text};

  &:hover {
    transform: scale(1.2);
    transition: 0.3s ease;
  }
`;
