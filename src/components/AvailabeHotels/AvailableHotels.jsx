import React from 'react';

import { useSearchHotelsQuery } from '../../store/apis';
import { Container } from '../Container';
import { Hotels } from '../Hotels';
import { Loader } from '../Loader';

import { useAvailableHotelsStyles } from './AvailableHolels.slyles';

export const AvailableHotels = ({ searchParams }) => {
  const { data: foundHotels, isLoading } = useSearchHotelsQuery(searchParams, { skip: !searchParams });
  const classes = useAvailableHotelsStyles();

  if (isLoading) {
    return <Loader loading={isLoading}><img src="../../assets/images/load.gif" alt="loading..."/></Loader>;
  }

  return (
    <>
      {foundHotels && foundHotels.length > 0 && (
        <div className={classes.availableHotelsBlock}>
          <h2>Available hotels</h2>
          <Container>
            <div className={classes.availableHotels}>
              <Hotels data={foundHotels} />
            </div>
          </Container>
        </div>
      )}
      {foundHotels && foundHotels.length === 0 && <h2>No hotels found</h2>}
    </>
  );
};
