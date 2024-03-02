import { ProjectsSliderOne } from "./Projects/projectSliderOne";
import { ProjectSliderThree } from "./Projects/projectSliderThree";
import {
  FirstSliderWrapper,
  PortfolioParagraph,
  PortfolioTitle,
  PortfolioWrapper,
  ThirdSliderWrapper,
} from "./styled";

export const Portfolio = () => {
  return (
    <>
      <PortfolioTitle>Show time 🚀</PortfolioTitle>
      <PortfolioWrapper>
        <FirstSliderWrapper>
          {" "}
          <ProjectsSliderOne />
        </FirstSliderWrapper>
        <ThirdSliderWrapper>
          {" "}
          <ProjectSliderThree />
        </ThirdSliderWrapper>
      </PortfolioWrapper>
      <PortfolioParagraph>
        The next carousel, will appear soon !
      </PortfolioParagraph>
    </>
  );
};
