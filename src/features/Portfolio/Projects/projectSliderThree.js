import { useState } from "react";
import { PortfolioData } from "./portfolioData";

import {
  CircleBtnsWrapper,
  CircleButtons,
  CircleDotIcon,
  CircleIcon,
  LeftArrow,
  RightArrow,
  SliderButton,
  ThirdProjectContainer,
  ThirdSlide,
  ThirdSlideList,
} from "./styled";
import { ProjectTile } from "../ProjectTile/projectTile";

export const ProjectSliderThree = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  function showNextSlide() {
    setSlideIndex((index) => {
      if (index === PortfolioData.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevSlide() {
    setSlideIndex((index) => {
      if (index === 0) return PortfolioData.length - 1;
      return index - 1;
    });
  }

  return (
    <>
      <ThirdProjectContainer aria-label="Portfolio Slider">
        <ThirdSlide>
          <ThirdSlideList
            style={{ transform: `translate(-${slideIndex * 100}%)` }}
          >
            {PortfolioData.map((item, alt, index) => (
              <ProjectTile key={item.id} item={item} alt={alt} aria-hidden={slideIndex !== index} />
            ))}
          </ThirdSlideList>
        </ThirdSlide>
        <SliderButton
          onClick={() => {
            showPrevSlide(slideIndex - 1);
          }}
          style={{ left: 0 }}
          aria-label="View Previous Slide"
        >
          <LeftArrow aria-hidden />
        </SliderButton>
        <SliderButton
          onClick={() => {
            showNextSlide(slideIndex + 1);
          }}
          style={{ right: 0 }}
          aria-label="View Next Slide"
        >
          <RightArrow aria-hidden />
        </SliderButton>
        <CircleBtnsWrapper>
          {PortfolioData.map((item, index) => (
            <CircleButtons
              onClick={() => {
                setSlideIndex(index);
              }}
              aria-label={`View Slide ${index + 1}`}
              key={item.id}
            >
              {index === slideIndex ? <CircleDotIcon aria-hidden /> : <CircleIcon aria-hidden />}
            </CircleButtons>
          ))}
        </CircleBtnsWrapper>
      </ThirdProjectContainer>
    </>
  );
};
