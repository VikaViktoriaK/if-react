import React from "react";

import { Hotels } from "../Hotels";
import { useSearchHotelsQuery } from "../../store/queries/searchHotels.query";
import { Container } from "../Container";

export const AvailableHotels = ({ searchParams }) => {
  const { data: foundHotels, isLoading } = useSearchHotelsQuery(searchParams);

  return (
    <>
      {" "}
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
    </>
  );
};
