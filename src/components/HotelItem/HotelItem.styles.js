import { createUseStyles } from 'react-jss';

const hotelItemStyles = (theme) => ({
  homesItem: {
    width: 'auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  imgHomes: {
    width: 296,
    height: 296,
  },
  textHomes: {
    fontSize: 24,
    fontWeight: 400,
    color: theme.palette.primary.accent,
    cursor: 'pointer',
  },
  textCountryHomes: {
    fontSize: 24,
    fontWeight: 400,
    color: '#bfbfbf',
  },
});

export const useHotelItemStyles = createUseStyles(hotelItemStyles);
