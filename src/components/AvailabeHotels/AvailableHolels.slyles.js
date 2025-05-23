import { createUseStyles } from 'react-jss';

import { darkTheme as theme } from '../../styles/darkTheme';

const availableHotelsStyles = {
  availableHotelsBlock: {
    backgroundColor: theme.palette.primary.background,
  },

  availableHotels: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    paddingBottom: '20px',
  },
};

export const useAvailableHotelsStyles = createUseStyles(availableHotelsStyles);
