import React from 'react';

import { Container } from '../Container';

import { useFooterStyles } from './Footer.styles';

export const Footer = () => {
  const classes = useFooterStyles();
  
  return (
    <>
      <footer className={classes.footer}>
        <Container>
          <div className={classes.footerLinks}>
            <ul className={classes.linksList}>
              <li>
                <a className={classes.listHeading}>About</a>
              </li>
              <li>
                <a className={classes.listLink}>How Triphouse works</a>
              </li>
              <li>
                <a className={classes.listLink}>Careers</a>
              </li>
              <li>
                <a className={classes.listLink}>Privacy</a>
              </li>
              <li>
                <a className={classes.listLink}>Terms</a>
              </li>
            </ul>
            <ul className={classes.linksList}>
              <li>
                <a className={classes.listHeading}>Property types</a>
              </li>
              <li>
                <a className={classes.listLink}>Guest houses</a>
              </li>
              <li>
                <a className={classes.listLink}>Hotels</a>
              </li>
              <li>
                <a className={classes.listLink}>Apartments</a>
              </li>
              <li>
                <a className={classes.listLink}>Villas</a>
              </li>
              <li>
                <a className={classes.listLink}>Holiday homes</a>
              </li>
              <li>
                <a className={classes.listLink}>Hostels</a>
              </li>
            </ul>
            <ul className={classes.linksList}>
              <li>
                <a className={classes.listHeading}>Support</a>
              </li>
              <li>
                <a className={classes.listLink}>Contact Customer Service</a>
              </li>
              <li>
                <a className={classes.listLink}>FAQ</a>
              </li>
            </ul>
          </div>
          <span className={classes.inc}>
            &#169; 2022Triphouse, Inc. All rights reserved
          </span>
        </Container>
      </footer>
    </>
  );
};
