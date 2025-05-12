import { createUseStyles } from 'react-jss';

const reviewsStyles = (theme) => ({
  reviews: {
    backgroundColor: theme.palette.primary.background,
    paddingBottom: '120px',
  },
  reviewsBlocks: {
    marginTop: '104px',
    height: '760px',
    marginBottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '18px',
  },
  reviewsCard: {
    backgroundColor: 'rgba(234, 240, 249, 1)',
    width: '400px',
    height: '760px',
  },
  reviewImageBlock: {
    position: 'relative',
  },
  reviewImage: {
    width: '100%',
    height: '400px',
  },
  cardInfo: {
    padding: '24px',
  },
  reviewPrice: {
    width: '400px',
    backgroundColor: '#383838b2',
    color: '#ffffff',
    padding: '16px 0 11px 24px',
    fontSize: '18px',
    fontWeight: 500,
    position: 'absolute',
    bottom: '2px',
  },
  cardAbout: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    '& a': {
      color: '#3077c6',
      fontSize: '18px',
      '&:first-child': {
        fontWeight: 500,
      },
      '&:last-child': {
        fontWeight: 400,
      },
    },
  },
  navRating: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    alignItems: 'end',
    '& span:last-child': {
      fontSize: '14px',
      fontWeight: 400,
      color: '#bfbfbf',
    },
  },
  rating: {
    width: '48px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#10367c',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: 600,
    color: '#ffffff',
  },
  userBlock: {
    display: 'flex',
    gap: '16px',
    margin: '24px 0 17px 0',
    '& span': {
      fontSize: '18px',
      fontWeight: 400,
      '&:last-child': {
        color: '#bfbfbf',
      },
    },
  },
  userImage: {
    width: '54px',
    height: '54px',
    display: 'flex',
    alignItems: 'center',
  },
  reviewText: {
    fontSize: '18px',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
});

export const useReviewsStyles = createUseStyles(reviewsStyles);
