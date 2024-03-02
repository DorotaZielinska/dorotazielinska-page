import { motion } from "framer-motion";
import styled from "styled-components";
import { ReactComponent as ContactAnimate } from "./pc-computer-phone-data-transfer-svgrepo-com.svg";

export const ContactWrapper = styled(motion.div)`
  height: 100%;
  width: 1336px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}) {
    width: 100%;
    padding: 10px;
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    flex-direction: column;
    margin-top: 0;}
`;

export const TextContainer = styled(motion.div)`
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    gap: 20px;
    text-align: center;
    align-items: center;
    margin-top: 70px;
  }
`;

export const SubTitle = styled(motion.h1)`
  font-size: 100px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}) {
    font-size: 67px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    font-size: 36px;
  }
`;

export const FormContainer = styled(motion.div)`
  flex: 1;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    width: 100%;
    padding: 50px;
  }
`;

export const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Field = styled.input`
  padding: 20px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.contact.border};
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    padding: 10px;
  }
`;

export const TextField = styled.textarea`
  padding: 20px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.contact.border};
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    padding: 10px;
  }
`;

export const ContactButton = styled.button`
  background-color: ${({ theme }) => theme.contact.background};
  padding: 20px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    padding: 10px;
  }
`;

export const ContactImage = styled(ContactAnimate)`
  fill: white;
  position: absolute;
  margin: auto;
  z-index: -1;
`;

export const AnimateWrapper = styled(motion.div)``;
