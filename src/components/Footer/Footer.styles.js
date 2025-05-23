import { createUseStyles } from 'react-jss';

const footerStyles = {
  footer: {
    backgroundColor: '#10367c',
    height: 625,
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 120,
    paddingBottom: 64,
    cursor: 'pointer',
  },
  linksList: {
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 400,
    gap: 24,
  },
  listHeading: {
    fontSize: 20,
    fontWeight: 500,
    color: '#ffffff',
  },
  listLink: {
    fontSize: 20,
    color: '#ffffff',
  },
  inc: {
    fontSize: 14,
    color: '#ffffff',
  },
  footerLogo: {
    display: 'none',
  },
};

export const useFooterStyles = createUseStyles(footerStyles);
