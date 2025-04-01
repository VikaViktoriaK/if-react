import './HomesLoves.css';
import React from 'react';
import { Hotels } from '../Hotels';
import {useGetPopularHotelsQuery} from '../../store/apis/hotels/getPopularHotels.endpoint';

export const HomesLoves = () => {
  const { data: homesLovesData } = useGetPopularHotelsQuery();
  return (
    <div className="homes-loves">
      <h2>Homes guests loves</h2>
      <div className="hr-heading"></div>
      <div className="homes-group" id="homes-group">
        <Hotels data={homesLovesData}/>
      </div>
    </div>
  );
};
