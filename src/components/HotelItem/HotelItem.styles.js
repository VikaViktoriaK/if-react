import { createUseStyles } from 'react-jss';

const hotelItemStyles = {
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
    color: '#3077c6',
    cursor: 'pointer',
  },
  textCountryHomes: {
    fontSize: 24,
    fontWeight: 400,
    color: '#bfbfbf',
  },
};

export const useHotelItemStyles = createUseStyles(hotelItemStyles);
