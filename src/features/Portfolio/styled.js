import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: 1fr;
    grid-template-rows: 4fr;
  }
`;

export const PortfolioTitle = styled.h1`
  margin: 60px 60px;
  font-size: 2rem;
  text-align: center;
  line-height: 1.4;
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 1.8rem;
  }
`;

export const FirstSliderWrapper = styled.div`
  background-color: ${({ theme }) => theme.portfolio.backgroundFirst};
`;

export const ThirdSliderWrapper = styled.div`
  background-color: ${({ theme }) => theme.portfolio.backgroundSecond};
`;

export const PortfolioParagraph = styled.p`
  font-size: 2rem;
  text-align: center;
`;
