import { createUseStyles } from 'react-jss';

const counterStyles = {
  optionsItemButtons: {
    display: 'flex',
    columnGap: '20px',
  },

  optionsButton: {
    color: '#3077c6',
    fontSize: '18px',
    width: '30px',
    height: '30px',
    border: '1px solid #3077c6',
    cursor: 'pointer',
    transform: 'none',
    userSelect: 'none',

    '&:disabled': {
      color: '#cecece',
      border: '1px solid #cecece',
    },
  },

  optionsCounterNumber: {
    marginTop: '5px',
  },
};

export const useCounterStyles = createUseStyles(counterStyles);
