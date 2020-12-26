import React from 'react';
import './Navbar.styles.css';
// import { MapSvg } from '../../assets/maps.svg';

function Navbar() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="headerContent">
            Start
            <br />
            Navigation
          </div>
          <div className="headerSvg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80.239"
              height="110.682"
              viewBox="0 0 94.239 126.682"
            >
              <g
                id="Group_254"
                data-name="Group 254"
                transform="translate(-1611.811 -5450.455)"
              >
                <path
                  id="Union_9"
                  data-name="Union 9"
                  d="M-3065.546,5922.569v-31.285l.582-.764c6.527-8.072,17.832-23.033,24.761-36.667l3.253.963v77.152Zm-65.644-.963v-77.152l29.178,9.779.381.2v76.972Z"
                  transform="translate(4743 -354.831)"
                  fill="#fbfdff"
                />
                <path
                  id="Union_10"
                  data-name="Union 10"
                  d="M-3129.335,5900.692c8.072,13.456,15.563,25.725,28.615,34.56v25.725l-28.615,9.6Zm26.747,24.2h0c-.3-.367-7.359-9.1-14.295-19.456a150.946,150.946,0,0,1-9.83-16.582c-2.964-6-4.467-10.8-4.467-14.263h.181a11.493,11.493,0,0,1-.181-2.492,28.574,28.574,0,0,1,8.773-19.607,28.582,28.582,0,0,1,19.923-8.035,28.578,28.578,0,0,1,19.921,8.035,28.582,28.582,0,0,1,8.773,19.607,10.447,10.447,0,0,1-.2,2.492h.2c0,3.454-1.513,8.247-4.5,14.247a150.74,150.74,0,0,1-9.9,16.583c-7.073,10.5-14.325,19.383-14.4,19.472h0Zm-.058-61.045a11.119,11.119,0,0,0-10.673,11.135,11.119,11.119,0,0,0,10.673,11.135c.148.007.307.012.47.012a11.2,11.2,0,0,0,9.573-5.439,11.136,11.136,0,0,0,0-11.417,11.192,11.192,0,0,0-9.569-5.437C-3102.331,5863.834-3102.491,5863.837-3102.647,5863.845Z"
                  transform="translate(4774.339 -394)"
                  fill="#00a8ff"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="locations">hello</div>
        <div className="recent-locations">hye</div>
        <div className="traffic">sajd</div>
      </div>
    </>
  );
}

export default Navbar;
