import styled from "styled-components";

export const CarouselTile = styled.article`
  max-width: 320px;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 20px;
`;

export const ImageWrapper = styled.div``;

export const ProjectImage = styled.img`
  max-width: 288px;
  max-height: 400px;
`;

export const ContentDetails = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: green;
`;
export const Title = styled.h3``;

export const Description = styled.p``;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProjectLinks = styled.a`
  padding: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.portfolio.text};
  font-size: 1.2rem;

  &:hover {
    color: ${({ theme }) => theme.hover.text};
    transform: scale(1.2);
  }

  &:focus-visible {
    background-color: rgba(0, 0, 0, 0.2);
    outline: auto;
  }
`;
