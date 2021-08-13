import { ThemeInterface } from './ThemeInterface'

export const defaultTheme: ThemeInterface = {
  isRTL: false,
  palette: {
    primary: {
      main: '#333333',
      contrastText: '#333333',
    },
    nowIndicator: 'red',
    gray: {
      // 50: '#fafafa',
      100: '#EBEBEB',
      200: '#EBEBEB',
      300: '#9C9C9C',
      500: '#9e9e9e',
      // 600: '#757575',
      // 700: '#616161',
      800: '#424242',
      // 900: '#212121',
    },
  },
  eventCellOverlappings: [
    { main: '#E26245', contrastText: '#fff' }, // orange
    { main: '#4AC001', contrastText: '#fff' }, // green
    { main: '#5934C7', contrastText: '#fff' }, // purple
  ],
  typography: {
    fontFamily: 'Roboto',
    xs: {
      fontSize: 10,
    },
    sm: {
      fontSize: 14,
    },
    xl: {
      fontSize: 14,
    },
  },
}
