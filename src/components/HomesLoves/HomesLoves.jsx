import './HomesLoves.css';
import React from 'react';
import { Hotels } from '../Hotels';
import { useGetHomesPostsQuery } from '../../store/queries/getHomesPost.query';

export const HomesLoves = () => {
  const { data: homesLovesData } = useGetHomesPostsQuery();
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
