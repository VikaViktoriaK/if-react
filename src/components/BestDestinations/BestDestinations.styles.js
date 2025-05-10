import { createUseStyles } from 'react-jss';

const bestDestinationsStyles = {
  destinationsContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '65px',
  },
  destinationsButtons: {
    display: 'flex',
    width: '50%',
    height: '64px',
    borderRadius: '8px',
    backgroundColor: '#f3f3f4',
    marginTop: '80px',
    cursor: 'pointer',
  },
  buttonRegion: {
    fontSize: '24px',
    fontWeight: 400,
    border: 'none',
    borderRadius: '8px',
    padding: '17px 53px',
    color: '#383838',
    backgroundColor: '#f3f3f4',
    cursor: 'pointer',
    '&:hover': {
      color: '#ffffff',
      backgroundColor: '#3077c6',
      transition: '0.8s',
    },
  },
  buttonCities: {
    fontSize: '24px',
    fontWeight: 400,
    border: 'none',
    borderRadius: '8px',
    padding: '17px 53px',
    color: '#383838',
    backgroundColor: '#f3f3f4',
    cursor: 'pointer',
    '&:hover': {
      color: '#ffffff',
      backgroundColor: '#3077c6',
      transition: '0.8s',
    },
  },
  buttonPlaces: {
    width: '100%',
    fontSize: '24px',
    fontWeight: 400,
    border: 'none',
    borderRadius: '8px',
    color: '#383838',
    backgroundColor: '#f3f3f4',
    cursor: 'pointer',
    '&:hover': {
      color: '#ffffff',
      backgroundColor: '#3077c6',
      transition: '0.8s',
    },
  },
  destinationsBlocks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
  },
  destinationsElement: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    position: 'relative',
    '&:hover $destinationImage': {
      filter: 'brightness(60%)',
      transition: '0.3s',
    },
    '&:hover $destinationsButton': {
      opacity: 1,
      transition: '0.3s',
    },
    '&:hover $destinationsEffect': {
      backgroundColor: '#38383866',
    },
  },
  openBlock: {
    display: 'flex',
    gap: '14px',
    position: 'relative',
  },
  destinationsName: {
    fontSize: '24px',
    fontWeight: 400,
    color: '#3077c6',
  },
  destinationImage: {
    width: '100%',
    height: '100%',
  },
  destinationsButton: {
    width: '128px',
    height: '48px',
    display: 'inline-block',
    backgroundColor: '#ffffff',
    color: '#3077c6',
    fontSize: '18px',
    fontWeight: 400,
    borderRadius: '8px',
    border: 'solid 1px #3077c6',
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%)',
    opacity: 0,
    zIndex: 2,
    '&:hover': {
      backgroundColor: '#3077c6',
      color: '#ffffff',
    },
  },
};

export const useBestDestinationsStyles = createUseStyles(bestDestinationsStyles);
