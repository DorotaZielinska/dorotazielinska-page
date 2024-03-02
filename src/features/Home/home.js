import { TypeAnimation } from "react-type-animation";
import { ClockWrapper, Header, HomeContainer, Paragraph } from "./styled";
import { Clock } from "../../common/Clock/Clock";

export const Home = () => {
  return (
    <>
      <HomeContainer>
        <Header>Welcome to my website!</Header>
        <Paragraph>
          <TypeAnimation
            sequence={["I'm a Frontend Developer.", 1000, "I'm creative.", 1000, "Cooperation win-win.", 1000, ]}
            speed={50}
            repeat={Infinity}
          />
        </Paragraph>
        <Paragraph>It`s time to act.</Paragraph>
       <ClockWrapper>
       <Clock />
       </ClockWrapper>
      </HomeContainer>
    </>
  );
};
