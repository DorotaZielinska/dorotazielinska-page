import {
    CarouselTile,
    ContentDetails,
    ImageWrapper,
    LinksContainer,
    ProjectImage,
    ProjectLinks,
    Title,
  } from "./styled";
  
  export const ProjectTile = ({ item }) => {
    return (
      <>
        <CarouselTile>
          <ContentDetails>
            <Title>{item.title}</Title>
            <LinksContainer>
              <ProjectLinks href={item.demo} target="_blank" rel="noreferrer">
                Demo
              </ProjectLinks>
              <ProjectLinks href={item.code} target="_blank" rel="noreferrer">
                Code
              </ProjectLinks>
            </LinksContainer>
          </ContentDetails>
          <ImageWrapper>
            <ProjectImage src={item.image} />
          </ImageWrapper>
        </CarouselTile>
      </>
    );
  };
  