import React from "react";

import { Hotels } from "../Hotels";
import { useSearchHotelsQuery } from "../../store/queries/searchHotels.query";
import { Container } from "../Container";
import { Loader } from '../Loader';

export const AvailableHotels = ({ searchParams }) => {
  const { data: foundHotels, isLoading } = useSearchHotelsQuery(searchParams);

  if (isLoading) {
    return <Loader loading={isLoading}><img src="../../assets/images/load.gif" alt="loading..."/></Loader>
  }

  return (
    <>
      {foundHotels && foundHotels.length > 0 && (
        <div className="available-hotels-block">
          <h2>Available hotels</h2>
          <Container>
            <div className="available-hotels">
              <Hotels data={foundHotels} />
            </div>
          </Container>
        </div>
      )}
      {foundHotels && foundHotels.length === 0 && <h2>No hotels found</h2>}
    </>
  );
};
