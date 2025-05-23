import { createUseStyles } from 'react-jss';

const homeLovesStyles = (theme) => ( {
  homesLoves: {
    backgroundColor: theme.palette.primary.background,
  },
  homesGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
    position: 'relative',
    paddingBottom: 114,
    marginTop: 80,
    backgroundColor: theme.palette.primary.background,
  },
});

export const useHomeLovesStyles = createUseStyles(homeLovesStyles);
