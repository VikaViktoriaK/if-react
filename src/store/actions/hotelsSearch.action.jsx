import { HOTELS_ACTION } from './action.types';

export const hotelsRequest = (payload) => ({
  type: HOTELS_ACTION.REQUEST,
  payload,
});

export const hotelsSuccess = (payload) => ({
  type: HOTELS_ACTION.SUCCESS,
  payload,
});

export const hotelsError = (payload) => ({
  type: HOTELS_ACTION.ERROR,
  payload,
});
