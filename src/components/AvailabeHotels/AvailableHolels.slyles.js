import { createUseStyles } from 'react-jss';

const availableHotelsStyles = {
  availableHotelsBlock: {
    backgroundColor: '#ffffff',
  },

  availableHotels: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    paddingBottom: '20px',
  },
};

export const useAvailableHotelsStyles = createUseStyles(availableHotelsStyles);
