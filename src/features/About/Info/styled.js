import styled from "styled-components";
import { BsCamera2 } from "react-icons/bs";
import { motion } from "framer-motion";

export const InfoWrapper = styled.div`
  border-bottom: 0.05em solid currentColor;
  margin: 100px 100px 20px 100px; 
  justify-content: center;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 0; 
  }
`;

export const InfoTitle = styled(motion.h2)`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.primary.text};
  font-family: "Philosopher", sans-serif;
  font-size: 4vmax;
  font-weight: 700;
  position: relative;
  margin: 32px 0 123px 63px;
`;

export const InfoDescription = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  line-height: 1.4;
`;

export const WordParagraph = styled(motion.p)`
  max-width: 180px;
  border-radius: 50%;
  position: absolute;
  margin: -69px -40px -10px 20px;
`;

export const AnimeWrapper = styled(motion.div)`
`;

export const ImagesWrapper = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
`;
export const IconCamera = styled(BsCamera2)`
  font-size: 400px;
  position: relative;
 
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 313px;
  }
`;


