import {
  AnimeWrapper,
  IconCamera,
  ImagesWrapper,
  InfoTitle,
  InfoWrapper,
  WordParagraph,
} from "./styled";

export const Info = () => {
  return (
    <>
      <InfoWrapper>
        <InfoTitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: 7 }}
        >
          {" "}
          Hi, I'm Dorota Zielinska <br /> Frontend with React is a fun! <br />{" "}
          Brings ideas to alive!
        </InfoTitle>
        <ImagesWrapper>
          <AnimeWrapper
            initial={{ opacity: 1, x: -444, y: -593, scale: 0.2 }}
            animate={{ y: -60, x: -0.2, scale: 1 }}
            transition={{ duration: 5, delay: 1 }}
          >
            <IconCamera />
          </AnimeWrapper>
          <WordParagraph
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ duration: 3, delay: 5 }}
          >
            Take a moment!
          </WordParagraph>
        </ImagesWrapper>
        <InfoTitle>
          From drawings, thanks to our work. <br />
          Takes your project to another stage.
          <br /> These puzzles will give a real shape.{" "}
        </InfoTitle>
      </InfoWrapper>
    </>
  );
};
