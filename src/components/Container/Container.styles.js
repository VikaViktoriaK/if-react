import { createUseStyles } from 'react-jss';

const containerStyles = {
  container: {
    maxWidth: 1264,
    width: '100%',
    padding: [0, 16],
    margin: [0, 'auto'],
  },
};

export const useContainerStyles = createUseStyles(containerStyles);
