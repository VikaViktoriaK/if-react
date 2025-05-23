import React from 'react';
import { useTheme } from 'react-jss';

import kingImg from '../../assets/images/kk-khostel.png';
import rokokoImg from '../../assets/images/rokoko.png';
import baliImg from '../../assets/images/ubud-bali.png';
import { Container } from '../Container';

import { useReviewsStyles } from './Reviews.styles';

export const Reviews = () => {
  const theme = useTheme();
  const classes = useReviewsStyles({ theme });
  
  return (
    <div className={classes.reviews}>
      <Container>
        <h2>Guests reviews</h2>
        <div className={classes.reviewsBlocks}>
          <div className={classes.reviewsCard}>
            <div className={classes.reviewImageBlock}>
              <img
                className={classes.reviewImage}
                src={baliImg}
                alt="Ubud Bali Resort&SPA"
              />
              <div className={classes.reviewPrice}>
                <span>From 250 USD</span>
              </div>
            </div>
            <div className={classes.cardInfo}>
              <div className={classes.cardAbout}>
                <div className={classes.cardLinks}>
                  <a href="#">Ubud Bali Resort&SPA</a>
                  <a href="#">Bali, Indonesia</a>
                </div>
                <div className={classes.navRating}>
                  <div className={classes.rating}>9,4</div>
                  <span>1324 reviews</span>
                </div>
              </div>
              <div className={classes.userBlock}>
                <div className={classes.userImage}>
                  <svg
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27 .3334C12.28.3334.3333 12.28.3333 27 .3333 41.72 12.28 53.6667 27 53.6667 41.72 53.6667 53.6666 41.72 53.6666 27 53.6666 12.28 41.72.3334 27 .3334Zm0 8c4.4266 0 8 3.5733 8 8 0 4.4266-3.5734 8-8 8-4.4267 0-8-3.5734-8-8 0-4.4267 3.5733-8 8-8ZM27 46.2c-6.6667 0-12.56-3.4133-16-8.5866.08-5.3067 10.6666-8.2134 16-8.2134 5.3066 0 15.92 2.9067 16 8.2134C39.56 42.7867 33.6666 46.2 27 46.2Z"
                      fill="#BFBFBF"
                    />
                  </svg>
                </div>
                <div className={classes.userInfo}>
                  <span>Hanna Ivanova</span>
                  <div>
                    <svg
                      width="17"
                      height="15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#a)">
                        <path d="M0 0h17v14.9997H0V0Z" fill="#FFDA44" />
                        <path d="M0 0h17v7.4999H0V0Z" fill="#338AF3" />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M0 0h17v15H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Ukraine</span>
                  </div>
                </div>
              </div>
              <p className={classes.reviewText}>
                Great location, really pleasant and clean <br />
                rooms, but the thing that makes this such a <br />
                good place to stay are the staff. All of the <br />
                people are incredibly helpful and generous <br />
                with their time and advice.
              </p>
            </div>
          </div>
          <div className={classes.reviewsCard}>
            <div className={classes.reviewImageBlock}>
              <img
                className={classes.reviewImage}
                src={kingImg}
                alt="King Kong Hostel"
              />
              <div className={classes.reviewPrice}>
                <span>From 40 USD</span>
              </div>
            </div>
            <div className={classes.cardInfo}>
              <div className={classes.cardAbout}>
                <div className={classes.cardLinks}>
                  <a href="#">King Kong Hostel</a>
                  <a href="#">Rotterdam, Netherlands</a>
                </div>
                <div className={classes.navRating}>
                  <div className={classes.rating}>8,9</div>
                  <span>2016 reviews</span>
                </div>
              </div>
              <div className={classes.userBlock}>
                <div className={classes.userImage}>
                  <svg
                    width="54"
                    height="54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27 .3334C12.28.3334.3333 12.28.3333 27 .3333 41.72 12.28 53.6667 27 53.6667 41.72 53.6667 53.6666 41.72 53.6666 27 53.6666 12.28 41.72.3334 27 .3334Zm0 8c4.4266 0 8 3.5733 8 8 0 4.4266-3.5734 8-8 8-4.4267 0-8-3.5734-8-8 0-4.4267 3.5733-8 8-8ZM27 46.2c-6.6667 0-12.56-3.4133-16-8.5866.08-5.3067 10.6666-8.2134 16-8.2134 5.3066 0 15.92 2.9067 16 8.2134C39.56 42.7867 33.6666 46.2 27 46.2Z"
                      fill="#BFBFBF"
                    />
                  </svg>
                </div>
                <div className={classes.userInfo}>
                  <span>Adam Smith</span>
                  <div>
                    <svg
                      width="17"
                      height="13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#a)">
                        <path d="M0 .957h17v11.3334H0V.957Z" fill="#fff" />
                        <path
                          d="M0 .957h17v.8716H0V.957Zm0 1.7431h17v.8716H0V2.7Zm0 1.743h17v.8716H0v-.8715Zm0 1.7432h17v.8715H0v-.8715Zm0 1.7464h17v.8715H0v-.8715Zm0 1.743h17v.8716H0v-.8716Zm0 1.7431h17v.8716H0v-.8716Z"
                          fill="#D80027"
                        />
                        <path d="M0 .957h8.5v6.1008H0V.957Z" fill="#2E52B2" />
                        <path
                          d="m1.584 5.5598-.1326-.4242-.1458.4242H.8682l.3545.2552-.1325.4241.3612-.2618.3513.2618-.1359-.4241.3612-.2552h-.444Zm1.8657 0-.136-.4242-.1391.4242h-.4374l.3546.2552-.1326.4241.3546-.2618.3579.2618-.1326-.4241.3546-.2552h-.444Zm1.8723 0-.1425-.4242-.1326.4242h-.4474l.3646.2552-.1392.4241.3546-.2618.3645.2618-.1392-.4241.3546-.2552H5.322Zm1.8623 0-.1325-.4242-.1392.4242H6.472l.3579.2552-.1326.4241.3546-.2618.3579.2618-.1425-.4241.3645-.2552h-.4474ZM3.3138 3.4522l-.1392.4242h-.4374l.3546.2618-.1326.4175.3546-.2585.3579.2585-.1326-.4175.3546-.2618h-.444l-.136-.4242Zm-1.8624 0-.1458.4242H.8682l.3545.2618-.1325.4175.3612-.2585.3513.2585-.1359-.4175.3612-.2618h-.444l-.1326-.4242Zm3.728 0-.1325.4242h-.4474l.3646.2618-.1392.4175.3546-.2585.3645.2585-.1392-.4175.3546-.2618H5.322l-.1425-.4242Zm1.8724 0-.1392.4242H6.472l.3579.2618-.1326.4175.3546-.2585.3579.2585-.1425-.4175.3645-.2618h-.4474l-.1325-.4242ZM1.4514 1.7754l-.1458.4175H.8682l.3545.2618-.1325.4209.3612-.2618.3513.2618-.1359-.4209.3612-.2618h-.444l-.1326-.4175Zm1.8624 0-.1392.4175h-.4374l.3546.2618-.1326.4209.3546-.2618.3579.2618-.1326-.4209.3546-.2618h-.444l-.136-.4175Zm1.8657 0-.1326.4175h-.4474l.3646.2618-.1392.4209.3546-.2618.3645.2618-.1392-.4209.3546-.2618H5.322l-.1425-.4175Zm1.8723 0-.1392.4175H6.472l.3579.2618-.1326.4209.3546-.2618.3579.2618-.1425-.4209.3645-.2618h-.4474l-.1325-.4175Z"
                          fill="#fff"
                        />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path
                            fill="#fff"
                            transform="translate(0 .957)"
                            d="M0 0h17v11.3333H0z"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>USA</span>
                  </div>
                </div>
              </div>
              <p className={classes.reviewText}>
                I've been in this hostel for a month and here <br />
                is the best hostel of all <br />
                Excellent management of excellent and <br />
                ethical staff and bedrooms Bathrooms are <br />
                always clean and excellent <br />
                Most importantly, those who work here are <br />
                kind and good-natured.
              </p>
            </div>
          </div>
          <div className={classes.reviewsCard}>
            <div className={classes.reviewImageBlock}>
              <img
                className={classes.reviewImage}
                src={rokokoImg}
                alt="Rokoko Hotel"
              />
              <div className={classes.reviewPrice}>
                <span>From 100 USD</span>
              </div>
            </div>
            <div className={classes.cardInfo}>
              <div className={classes.cardAbout}>
                <div className={classes.cardLinks}>
                  <a href="#">Rokoko Hotel</a>
                  <a href="#">Ourika, Marocco</a>
                </div>
                <div className={classes.navRating}>
                  <div className={classes.rating}>9,1</div>
                  <span>815 reviews</span>
                </div>
              </div>
              <div className={classes.userBlock}>
                <div className={classes.userImage}>
                  <svg
                    width="54"
                    height="54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27 .3334C12.28.3334.3333 12.28.3333 27 .3333 41.72 12.28 53.6667 27 53.6667 41.72 53.6667 53.6666 41.72 53.6666 27 53.6666 12.28 41.72.3334 27 .3334Zm0 8c4.4266 0 8 3.5733 8 8 0 4.4266-3.5734 8-8 8-4.4267 0-8-3.5734-8-8 0-4.4267 3.5733-8 8-8ZM27 46.2c-6.6667 0-12.56-3.4133-16-8.5866.08-5.3067 10.6666-8.2134 16-8.2134 5.3066 0 15.92 2.9067 16 8.2134C39.56 42.7867 33.6666 46.2 27 46.2Z"
                      fill="#BFBFBF"
                    />
                  </svg>
                </div>
                <div className={classes.userInfo}>
                  <span>Anika Messer</span>
                  <div>
                    <svg
                      width="17"
                      height="13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#a)">
                        <path d="M0 .893h17v11.3335H0V.8931Z" fill="#D80027" />
                        <path d="M0 .893h17v3.7777H0V.8931Z" fill="#000" />
                        <path
                          d="M0 8.4482h17v3.7777H0V8.4482Z"
                          fill="#FFDA44"
                        />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path
                            fill="#fff"
                            transform="translate(0 .893)"
                            d="M0 0h17v11.3333H0z"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Germany</span>
                  </div>
                </div>
              </div>
              <p className={classes.reviewText}>
                Efficient, friendly, professional, and <br />
                appropriately attentive. Great hotel in a <br />
                great location. Easy access to all the <br />
                surrounding historical sites. Staff is <br />
                fantastic. Will definitely stay at this location <br />
                during my next stay in Marocco.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
