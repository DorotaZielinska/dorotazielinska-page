const themeColor = {
    white: "#FFFFFF",
    dolly: "#FCFD87",
    hintOfYellow: "#FEFEF6",
    chetwodeBlue: "#91a1dbfc",
    azureRadiance: "#0d82e0fc",
    scampi: "#575796",
    eastBay: "#3a3a7a",
    mintGreen: "#9cf79c",
    mountainMeadow: "#1DB847",
    madang: "#9cf29c",
    softPeach: "#f3edf1",
    mineShaft: "#252525",
    blackPearl: "#031017",
  };
  
  const breakpoints = {
    mobileVerticalMax: "575px",
    mobileMax: "767px",
    tabletVerticalMax: "991px",
    tabletHorizontalMax: "1199px",
    laptopMax: "1392px",
  };
  
  export const darkTheme = {
    primary: {
      text: themeColor.hintOfYellow,
      background: themeColor.blackPearl,
    },
    burger: {
      background: themeColor.white,
    },
    hover: {
      text: themeColor.eastBay,
    },
    links: {
      text: themeColor.softPeach,
    },
    slidebar: {
      background: themeColor.mountainMeadow,
    },
    contact: {
      background: themeColor.mountainMeadow,
      border: themeColor.mountainMeadow,
    },
    about: {
      background: themeColor.dolly,
      text: themeColor.mountainMeadow,
    },
    portfolio: {
      backgroundFirst: themeColor.mintGreen,
      backgroundSecond: themeColor.dolly,
      text: themeColor.blackPearl,
    },
    home: {
      backgroundHours: themeColor.hintOfYellow,
      backgroundMinutes: themeColor.hintOfYellow,
      backgroundSecond: themeColor.hintOfYellow,
    },
    breakpoints,
  };
  