import { createUseStyles } from 'react-jss';

const filterStyles = {
  ddd: {
    alignSelf: 'flex-end',
  },
  optionsContainer: {
    padding: [8, 22],
    position: 'relative',
    borderRadius: 8,
    display: 'none',
    rowGap: 8,
    flexDirection: 'column',
    width: 295,
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },

  active: {
    display: 'flex',
  },

  optionsDescriptionText: {
    display: 'flex',
    alignItems: 'center',
  },

  optionsText: {
    fontSize: 12,
    lineHeight: '14px',
  },

  optionsItems: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 12,
  },

  optionsItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export const useFilterStyles = createUseStyles(filterStyles);
