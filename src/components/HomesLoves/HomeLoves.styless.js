import { createUseStyles } from 'react-jss';

const homeLovesStyles = {
  homesLoves: {
    backgroundColor: '#eaf0f9',
  },
  homesGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
    position: 'relative',
    paddingBottom: 114,
    marginTop: 80,
    backgroundColor: '#eaf0f9',
  },
};

export const useHomeLovesStyles = createUseStyles(homeLovesStyles);
