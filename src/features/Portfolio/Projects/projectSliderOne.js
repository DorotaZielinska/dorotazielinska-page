import { useEffect, useRef, useState } from "react";
import { PortfolioData } from "./portfolioData";

import {
  InnerCarousel,
  ProjectsContainer,
  SliderWrapper,
  Wrapper,
} from "./styled";
import { ProjectTile } from "../ProjectTile/projectTile";

export const ProjectsSliderOne = () => {
  const [width, setWidth] = useState(0);
  const sliderWrapper = useRef();

  useEffect(() => {
    setWidth(
      sliderWrapper.current.scrollWidth - sliderWrapper.current.offsetWidth
    );
  }, []);

  return (
    <>
      <Wrapper>
        <ProjectsContainer>
          <SliderWrapper ref={sliderWrapper} whileTap={{ cursor: "grabbing" }}>
            <InnerCarousel
              drag="x"
              dragConstraints={{ right: 0, left: - width }}
            >
              {PortfolioData.map((item, index) => (
                <ProjectTile key={index} item={item} />
              ))}
            </InnerCarousel>
          </SliderWrapper>
        </ProjectsContainer>
      </Wrapper>
    </>
  );
};
