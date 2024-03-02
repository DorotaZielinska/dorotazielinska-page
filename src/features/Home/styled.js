import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Header = styled.h1`
  font-size: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin-top: 7rem;
  }
`;

export const Paragraph = styled.p`
  margin-top: 2rem;
  font-size: 2rem;
  font-family: "Philosopher", sans-serif;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 1.2rem;
  }
`;

export const ClockWrapper = styled.div`
  margin-top: 50px;
`;
