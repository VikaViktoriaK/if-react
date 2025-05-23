import { createUseStyles } from 'react-jss';

const registrationFormStyles = {
  regFormInput: {
    marginTop: 8,
    width: 320,
    height: 40,
  },
  regForm: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: '0 auto',
    width: 400,
    height: 365,
    backgroundColor: '#ffffff',
  },
  regFormName: {
    fontSize: 24,
    paddingTop: 45,
    paddingBottom: 40,
    display: 'flex',
    justifyContent: 'center',
  },
  regFormEl: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
  },
  regFormField: {
    display: 'flex',
    flexDirection: 'column',
  },
  regButton: {
    backgroundColor: '#3077C6',
    color: '#ffffff',
    fontSize: 24,
    width: 320,
    height: 48,
    border: 'none',
    borderRadius: 8,
    paddingTop: 8,
    display: 'flex',
    justifyContent: 'center',
  },
  regErrorMessage: {
    padding: '8px 0',
    textAlign: 'center',
  },
};

export const useRegistrationFormStyles = createUseStyles(registrationFormStyles);
