import { createUseStyles } from 'react-jss';

import logoImage from '../../assets/images/logo-more.png';

const navbarStyles = {
  header: {
    paddingTop: 51,
    display: 'flex',
    justifyContent: 'space-between',
  },

  headerLogo: {
    height: 40,
    width: 205,
    backgroundImage: `url(${logoImage})`,
    backgroundSize: 'cover',
  },

  headerSections: {
    display: 'flex',
    alignItems: 'center',
    gap: 48,
  },

  headerLinks: {
    display: 'flex',
    gap: 24,
    cursor: 'pointer',

    '& a': {
      borderBottom: 'solid 4px transparent',

      '&:hover': {
        borderBottom: 'solid 4px #f5bd41',
      },
    },
  },

  linkBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,

    '&:hover + hr': {
      display: 'block',
    },
  },

  hrLinks: {
    width: 50,
    height: 4,
    backgroundColor: '#f5bd41',
    display: 'none',
  },

  linkStays: {
    '&:hover': {
      borderBottom: 'solid 4px #f5bd41',
    },
  },

  linkAttractions: {
    '&:hover': {
      borderBottom: 'solid 4px #f5bd41',
    },
  },

  headerButtons: {
    display: 'flex',
    gap: 24,
    cursor: 'pointer',
    alignItems: 'center',
  },

  buttonNight: {
    height: 40,
    width: 30,
    backgroundSize: 'cover',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },

  buttonAccount: {
    maxHeight: 40,
    maxWidth: 40,
    backgroundImage: `url(${logoImage})`,
    width: 277,
    height: 40,
    backgroundSize: 'cover',
    backgroundPositionX: 40,
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    position: 'relative',
  },

  dropdownBlock: {
    backgroundColor: 'white',
    display: 'flex',
    gap: 16,
    paddingLeft: 16,
    alignItems: 'center',
    width: 190,
    height: 50,
    position: 'absolute',
    transform: 'translate(530%, 130%)',
  },

  dropdownLink: {
    fontSize: 20,
    color: '#333333',
  },
};

export const useNavbarStyles = createUseStyles(navbarStyles);
