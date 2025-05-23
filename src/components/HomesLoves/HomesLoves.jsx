import React from 'react';
import { useTheme } from 'react-jss';

import { useGetPopularHotelsQuery } from '../../store/apis';
import { Hotels } from '../Hotels';

import { useHomeLovesStyles } from './HomeLoves.styless';

export const HomesLoves = () => {
  const { data: homesLovesData } = useGetPopularHotelsQuery();
  const theme = useTheme();
  const classes = useHomeLovesStyles({ theme });
  
  return (
    <div className={classes.homesLoves}>
      <h2>Homes guests loves</h2>
      <div className={classes.homesGroup}>
        <Hotels data={homesLovesData} />
      </div>
    </div>
  );
};
