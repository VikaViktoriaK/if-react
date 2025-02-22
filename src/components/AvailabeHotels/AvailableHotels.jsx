import React from 'react';

import { useHotelSearch } from '../../hooks/useHotelsSearch';
import { Hotels } from '../Hotels';

export const AvailableHotels = () => {
  const [foundHotels] = useHotelSearch();

  return <div>{foundHotels > 0 && <Hotels data={foundHotels} />}</div>;
};
