import { createUseStyles } from 'react-jss';

const hotelPageStyles = {
  hotelPageBlock: {
    backgroundColor: '#ffffff',
    marginTop: '20px',
    padding: '70px 0',
    fontSize: '24px',
    color: '#a4bcec',
  },
  hotelDetailsBlock: {
    padding: '0 150px',
  },
  hotelBlock: {
    display: 'flex',
    justifyContent: 'center',
  },
  hotelName: {
    color: '#3077c6',
  },
  calendarBlock: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '50px',
    backgroundColor: '#a4bcec',
    padding: '10px',
    borderRadius: '10px',
  },
  selectText: {
    fontSize: '18px',
    color: '#ffffff',
  },
};

export const useHotelPageStyles = createUseStyles(hotelPageStyles);
