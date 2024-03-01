import useTime from "./useTime";
import {
  ClockNumber,
  ClockWrapper,
  HandHour,
  HandMinute,
  HandSecond,
} from "./styled";

export const Clock = () => {
  const time = useTime();

  return (
    <>
      <ClockWrapper>
        <HandHour rotation={time.hours}></HandHour>
        <HandMinute rotation={time.minutes}></HandMinute>
        <HandSecond rotation={time.seconds}></HandSecond>
        <ClockNumber>
          <div>
            <p>1</p>
          </div>
          <div>
            <p>2</p>
          </div>
          <div>
            <p>3</p>
          </div>
          <div>
            <p>4</p>
          </div>
          <div>
            <p>5</p>
          </div>
          <div>
            <p>6</p>
          </div>
          <div>
            <p>7</p>
          </div>
          <div>
            <p>8</p>
          </div>
          <div>
            <p>9</p>
          </div>
          <div>
            <p>10</p>
          </div>
          <div>
            <p>11</p>
          </div>
          <div>
            <p>12</p>
          </div>
        </ClockNumber>
      </ClockWrapper>
    </>
  );
};
