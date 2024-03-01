import styled from "styled-components";

export const ClockWrapper = styled.div`
  width: 15rem;
  height: 15rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    background-color: black;
    z-index: 11;
    width: 15px;
    height: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
`;

export const HandHour = styled.div`
  height: 5px;
  width: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: rotate(${(p) => p.rotation}deg);

  &:after {
    content: "";
    height: 4.5rem;
    width: 5px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.home.backgroundHours};
    position: absolute;
    bottom: 0;
  }
`;

export const HandMinute = styled.div`
  height: 5px;
  width: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: rotate(${(p) => p.rotation}deg);

  &:after {
    content: "";
    height: 5.1rem;
    width: 3px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.home.backgroundMinutes};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const HandSecond = styled.div`
  height: 5px;
  width: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: rotate(${(p) => p.rotation}deg);

  &:after {
    content: "";
    height: 120px;
    width: 1px;
    border-radius: 1px;
    background-color: ${({ theme }) => theme.home.backgroundSecond};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ClockNumber = styled.div`
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    transform: rotate(var(--rotation));
    --rotation: 0;
    color: white;
    box-shadow: 6px 4px 23px 9px #eee;

    &:first-child {
      --rotation: 30deg;
      p {
        transform: rotate(-30deg);
      }
    }

    &:nth-child(2) {
      --rotation: 60deg;
      p {
        transform: rotate(-60deg);
      }
    }

    &:nth-child(3) {
      --rotation: 90deg;
      p {
        transform: rotate(-90deg);
      }
    }
    &:nth-child(4) {
      --rotation: 120deg;
      p {
        transform: rotate(-120deg);
      }
    }
    &:nth-child(5) {
      --rotation: 150deg;
      p {
        transform: rotate(-150deg);
      }
    }
    &:nth-child(6) {
      --rotation: 180deg;
      p {
        transform: rotate(-180deg);
      }
    }
    &:nth-child(7) {
      --rotation: 210deg;
      p {
        transform: rotate(-210deg);
      }
    }
    &:nth-child(8) {
      --rotation: 240deg;
      p {
        transform: rotate(-240deg);
      }
    }
    &:nth-child(9) {
      --rotation: 270deg;
      p {
        transform: rotate(-270deg);
      }
    }
    &:nth-child(10) {
      --rotation: 300deg;
      p {
        transform: rotate(-300deg);
      }
    }
    &:nth-child(11) {
      --rotation: 330deg;
      p {
        transform: rotate(-330deg);
      }
    }
    &:nth-child(12) {
      --rotation: 360deg;
      p {
        transform: rotate(360deg);
      }
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
      box-shadow: 2px 1px 15px 8px #eee;
    }
  }
`;
