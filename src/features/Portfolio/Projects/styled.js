import styled from "styled-components";
import { motion } from "framer-motion";
import { FaCircle, FaCircleArrowLeft, FaCircleDot } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

export const Wrapper = styled.div`
max-width: 320px;
width: 100%;
margin: 0 auto;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
   justify-content: center;
   align-items: center;
  }
`;

export const ProjectsContainer = styled.ul`
transition: translate 300ms ease-in-out;
`;

export const SliderWrapper = styled(motion.div)`
 object-fit: cover;
 overflow: hidden;
 display: flex;
`;

export const InnerCarousel = styled(motion.div)`
  display: inline-flex;
`;

export const ThirdProjectContainer = styled.section`
  max-width: 320px;
  width: 100%;
  aspect-ratio: 10 / 8;
  height: 550px;
  overflow: hidden;
  margin: 17px auto;
  padding-left: 43px;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

export const ThirdSlide = styled.div`
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
  flex-shrink: 0;
  flex-grow: 0;
  transition: translate 300ms ease-in-out;
`;

export const ThirdSlideList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 40px;
`;

export const SliderButton = styled.button`
  all: unset;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 100ms ease-in-out;
 
  &:focus-visible  {
    background-color: rgba(0, 0, 0, 0.2);
    outline: auto;
  }                     
  &:hover  {
    background-color: rgba(0, 0, 0, 0.2);
  }
  
`;

export const RightArrow = styled(FaCircleArrowRight)`
  width: 2rem;
  height: 2rem;
  pointer-events: none;
  fill: black;
`;

export const LeftArrow = styled(FaCircleArrowLeft)`
  width: 2rem;
  height: 2rem;
  pointer-events: none;
  fill: black;
`;

export const CircleBtnsWrapper = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  translate: -50%;
  display: flex;
  gap: 0.25rem;
`;

export const CircleButtons = styled.button`
  all: unset;
  display: block;
  width: 1rem;
  height: 1rem;
  cursor: pointer;

  &:focus-visible  {
    scale: 1.2;
    outline: auto;
  }  
  &:hover {
    scale: 1.2;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const CircleDotIcon = styled(FaCircleDot)`
  fill: ${({ theme }) => theme.primary.background};
`;

export const CircleIcon = styled(FaCircle)`
  fill: ${({ theme }) => theme.hover.text};
`;
