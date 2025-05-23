import { createUseStyles } from 'react-jss';

const topSectionStyles = {
  topSection: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
  },

  apps: {
    width: 270,
    height: 40,
    display: 'flex',
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
  },

  google: {
    width: 135,
    backgroundImage: 'url("../../assets/images/apps.png")',
  },

  appStore: {
    width: 120,
    backgroundImage: 'url("../../assets/images/apps.png")',
    backgroundPositionX: 120,
  },

  topContent: {
    marginTop: 196,
  },

  formButton: {
    width: 192,
    height: 64,
    padding: 0,
    border: 'none',
    borderRadius: 8,
    backgroundColor: '#3077c6',
    fontSize: 24,
    fontWeight: 500,
    color: '#ffffff',
    cursor: 'pointer',
  },

  form: {
    height: 64,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    display: 'flex',
    marginTop: 150,
    marginBottom: 15,
  },
  
  formElements: {
    position: 'relative',
    width: '100%',
    '& input': {
      width: '100%',
      height: 64,
      borderRadius: '8px',
      border: '3px solid transparent',
      paddingLeft: '24px',
      fontSize: '18px',
      '&::placeholder': {
        fontSize: '18px',
        color: '#000000',
      },
      '&:focus': {
        border: '3px solid #f5bd41',
      },
    },
    '& label': {
      position: 'absolute',
      top: '-36px',
      left: '15px',
      color: '#ffffff',
    },
  },

  country: {
    width: '39.5%',
  },

  date: {
    display: 'flex',
    width: '18%',
  },

  options: {
    width: '27%',
    position: 'relative',
  },

  formElementsInputPlaceholder: {
    fontSize: 18,
    color: '#000000',
  },

  formElementsInput: {
    width: '100%',
    height: 63,
    borderRadius: 8,
    border: '3px solid transparent',
    paddingLeft: 24,
    fontSize: 18,
    '&:focus': {
      border: '3px solid #f5bd41',
    },
  },

  formElementsLabel: {
    position: 'absolute',
    top: -36,
    left: 15,
    color: '#ffffff',
  },
};

export const useTopSectionStyles = createUseStyles(topSectionStyles);
