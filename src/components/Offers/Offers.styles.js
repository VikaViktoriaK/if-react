import { createUseStyles } from 'react-jss';

const offersStyles = (theme) => ({
  containerOffer: {
    marginTop: 40,
    backgroundColor: theme.palette.primary.additional,
  },
  offersGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
    marginTop: 80,
    paddingBottom: 114,
  },
  offersItem: {
    width: 296,
    height: 176,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-between',
  },
  imgWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    marginBottom: 48,
  },
  imgHeadph: {
    width: 75,
    height: 92,
    marginBottom: 52,
  },
  imgMess: {
    width: 83,
    height: 92,
    marginBottom: 56,
  },
  imgLaptop: {
    width: 100,
    height: 67,
    marginBottom: 65,
  },
  imgCool: {
    width: 92,
    height: 83,
    marginBottom: 61,
  },
  textOffer: {
    fontSize: 24,
    fontWeight: 400,
  },
});

export const useOffersStyles = createUseStyles(offersStyles);
