import { createTheme } from "@nextui-org/react"

export default createTheme({
  type: "dark",
  theme: {
    colors: {
      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // generic colors
      white: '#ffffff',
      black: '#000000',
  
      // background colors (light)
      background: "$black",
      backgroundAlpha: "rgba(0, 0, 0, 0.8)", // used for semi-transparent backgrounds like the navbar
      foreground: "$white",
      backgroundContrast: "$black",
  
  
      //semantic colors (light)
      blue50: '#EDF5FF',
      // ...
      blue900: '#00254D',
      // ...
  
      // brand colors
      primaryLight: '$blue200',
      primaryLightHover: '$blue300', // commonly used on hover state
      primaryLightActive: '$blue400', // commonly used on pressed state
      primaryLightContrast: '$blue600', // commonly used for text inside the component
      primary: '$blue600',
      primaryBorder: '$blue500',
      primaryBorderHover: '$blue600',
      primarySolidHover: '$blue700',
      primarySolidContrast: '$white', // commonly used for text inside the component
      primaryShadow: '$blue500'

    },
    space: {},
    fonts: {}
  }
})

  