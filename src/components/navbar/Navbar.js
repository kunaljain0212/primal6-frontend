import React from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import './Navbar.styles.css';
import AutoComplete from 'react-google-autocomplete';

// export const AutoCompleteInputDest = () => {
//   const [destAddress, changeDestAddress] = useState();
//   // console.log(destAddress);
//   const handleSelect = (add) => {
//     changeDestAddress(add);
//     geocodeByAddress(destAddress)
//       .then((results) => getLatLng(results[0]))
//       .then((latLng) => console.log('Success', latLng))
//       .catch((error) => console.error('Error', error));
//   };
//   return (
//     <PlacesAutocomplete
//       value={destAddress}
//       onChange={changeDestAddress}
//       onSelect={handleSelect}
//       debounce={1000}
//     >
//       {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//         <div className="auto_complete_dropdown_container">
//           <input
//             {...getInputProps({
//               placeholder: 'Enter Start Location',
//               className: 'location-search-input',
//             })}
//           />
//           <div>
//             {loading && <div>Loading...</div>}
//             {suggestions.map((suggestion) => {
//               // console.log(suggestion);
//               // const className = suggestion.active
//               //   ? 'suggestion-item--active'
//               //   : 'suggestion-item';
//               // inline style for demonstration purpose
//               const style = suggestion.active
//                 ? {
//                     backgroundColor: '#fafafa',
//                     cursor: 'pointer',
//                     color: '#000',
//                   }
//                 : {
//                     backgroundColor: '#ffffff',
//                     cursor: 'pointer',
//                     color: '#000',
//                   };
//               return (
//                 <div
//                   {...getSuggestionItemProps(suggestion, {
//                     style,
//                   })}
//                 >
//                   <span>{suggestion.description}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </PlacesAutocomplete>
//   );
// };

// export const AutoCompleteInputStart = () => {
//   const [startAddress, changeStartAddress] = useState();
//   // console.log(startAddress);
//   const handleSelect = (add) => {
//     changeStartAddress(add);
//     geocodeByAddress(startAddress)
//       .then((results) => getLatLng(results[0]))
//       .then((latLng) => console.log('Success', latLng))
//       .catch((error) => console.error('Error', error));
//   };
//   return (
//     <PlacesAutocomplete
//       value={startAddress}
//       onChange={changeStartAddress}
//       onSelect={handleSelect}
//       debounce={1000}
//     >
//       {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//         <div className="auto_complete_dropdown_container">
//           <input
//             {...getInputProps({
//               placeholder: 'Enter Destination Location',
//               className: 'location-search-input',
//             })}
//           />
//           <div>
//             {loading && <div>Loading...</div>}
//             {suggestions.map((suggestion) => {
//               // console.log(suggestion);
//               // const className = suggestion.active
//               //   ? 'suggestion-item--active'
//               //   : 'suggestion-item';
//               // inline style for demonstration purpose
//               const style = suggestion.active
//                 ? {
//                     backgroundColor: '#fafafa',
//                     cursor: 'pointer',
//                     color: '#000',
//                   }
//                 : {
//                     backgroundColor: '#ffffff',
//                     cursor: 'pointer',
//                     color: '#000',
//                   };
//               return (
//                 <div
//                   {...getSuggestionItemProps(suggestion, {
//                     style,
//                   })}
//                 >
//                   <span>{suggestion.description}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </PlacesAutocomplete>
//   );
// };

const Navbar = ({
  isNav,
  closeNav,
  onPlaceSelectedStart,
  onPlaceSelectedEnd,
  startNav,
  starting,
  ending,
}) => {
  return (
    <>
      {isNav === 'navbaropen' ? (
        <>
          <div className="container">
            <div className="containerIsOpen">
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
                    height="100%"
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
                  <div className="navclose" onClick={() => closeNav(null)}>
                    <IconContext.Provider
                      value={{ size: '30px', color: 'white' }}
                    >
                      <AiOutlineCloseSquare />
                    </IconContext.Provider>
                  </div>
                </div>
              </div>
              <div className="locations">
                <div className="start">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    width="20px"
                    x="0px"
                    y="0px"
                    viewBox="0 0 511.998 511.998"
                    style={{ enablebackground: 'new 0 0 511.998 511.998' }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path
                          d="M505.743,6.249c-6.08-6.101-15.211-7.893-23.168-4.672l-469.333,192c-8.768,3.605-14.123,12.544-13.12,21.973
 c0.981,9.429,8.064,17.067,17.387,18.773l220.139,40.021l40.043,220.139c1.685,9.323,9.323,16.405,18.752,17.408
 c0.747,0.064,1.493,0.107,2.219,0.107c8.576,0,16.448-5.184,19.755-13.269l192-469.333
 C513.658,21.459,511.823,12.329,505.743,6.249z"
                          fill="#fff"
                        />
                      </g>
                    </g>
                  </svg>
                  <AutoComplete
                    onPlaceSelected={(place) => {
                      onPlaceSelectedStart(place);
                    }}
                    types={['(regions)']}
                  />
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    height="20px"
                    width="20px"
                    viewBox="0 0 512.005 512.005"
                    style={{ enableBackground: 'new 0 0 512.005 512.005' }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path
                          d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
           S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
           c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
            M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"
                          fill="grey"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    height="25px"
                    width="25px"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: 'new 0 0 512 512' }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M468.329,358.972c-7.263-3.989-16.382-1.336-20.369,5.924c-3.989,7.261-1.337,16.381,5.924,20.369   C471.752,395.081,482,405.963,482,415.121c0,11.201-15.87,28.561-60.413,43.694C377.582,473.767,318.775,482,256,482   s-121.582-8.233-165.587-23.185C45.87,443.683,30,426.322,30,415.121c0-9.158,10.248-20.04,28.116-29.857   c7.261-3.988,9.913-13.108,5.924-20.369c-3.989-7.26-13.106-9.913-20.369-5.924C23.749,369.916,0,388.542,0,415.121   c0,20.374,14.012,49.422,80.762,72.1C127.794,503.2,190.028,512,256,512s128.206-8.8,175.238-24.779   c66.75-22.678,80.762-51.726,80.762-72.1C512,388.542,488.251,369.916,468.329,358.972z"
                        fill="#fff"
                      />
                      <path
                        d="M142.752,437.13c30.45,8.602,70.669,13.34,113.248,13.34s82.798-4.737,113.248-13.34   c37.253-10.523,56.142-25.757,56.142-45.275c0-19.519-18.889-34.751-56.142-45.274c-8.27-2.336-17.264-4.385-26.826-6.133   c-5.193,8.972-10.634,18.207-16.323,27.708c10.584,1.588,20.521,3.535,29.545,5.834c27.416,6.983,37.432,14.844,39.491,17.866   c-2.06,3.023-12.074,10.884-39.49,17.866c-25.949,6.609-59.335,10.379-94.498,10.716c-1.703,0.126-3.419,0.197-5.147,0.197   c-1.729,0-3.444-0.071-5.148-0.197c-35.163-0.337-68.549-4.106-94.498-10.716c-27.416-6.982-37.431-14.844-39.49-17.866   c2.059-3.022,12.075-10.883,39.491-17.866c9.024-2.298,18.961-4.246,29.546-5.834c-5.689-9.5-11.13-18.737-16.323-27.708   c-9.562,1.749-18.557,3.797-26.826,6.133c-37.253,10.523-56.142,25.756-56.142,45.274   C86.61,411.373,105.499,426.606,142.752,437.13z"
                        fill="#fff"
                      />
                      <path
                        d="M256,390.634c13.353,0,25.482-6.804,32.448-18.201c48.81-79.857,106.992-185.103,106.992-232.994   C395.44,62.552,332.888,0,256,0S116.56,62.552,116.56,139.439c0,47.891,58.183,153.137,106.992,232.994   C230.518,383.83,242.648,390.634,256,390.634z M199.953,129.865c0-30.903,25.143-56.045,56.047-56.045s56.047,25.142,56.047,56.045   c0,30.904-25.143,56.046-56.047,56.046S199.953,160.77,199.953,129.865z"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                  <AutoComplete
                    onPlaceSelected={(place) => {
                      onPlaceSelectedEnd(place);
                    }}
                    types={['(regions)']}
                  />
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    height="20px"
                    width="20px"
                    viewBox="0 0 512.005 512.005"
                    style={{ enableBackground: 'new 0 0 512.005 512.005' }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path
                          d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
           S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
           c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
            M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"
                          fill="grey"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="recent-locations">
                <div className="rl-sections">
                  <svg
                    height="20px"
                    viewBox="0 0 512 512"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm121.75 388.414062c-4.160156 4.160157-9.621094 6.253907-15.082031 6.253907-5.460938 0-10.925781-2.09375-15.082031-6.253907l-106.667969-106.664062c-4.011719-3.988281-6.25-9.410156-6.25-15.082031v-138.667969c0-11.796875 9.554687-21.332031 21.332031-21.332031s21.332031 9.535156 21.332031 21.332031v129.835938l100.417969 100.414062c8.339844 8.34375 8.339844 21.824219 0 30.164062zm0 0"
                      fill="#808080"
                    />
                  </svg>
                  <span>recent location</span>
                </div>
                <div className="rl-sections">
                  <svg
                    height="20px"
                    viewBox="0 0 512 512"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm121.75 388.414062c-4.160156 4.160157-9.621094 6.253907-15.082031 6.253907-5.460938 0-10.925781-2.09375-15.082031-6.253907l-106.667969-106.664062c-4.011719-3.988281-6.25-9.410156-6.25-15.082031v-138.667969c0-11.796875 9.554687-21.332031 21.332031-21.332031s21.332031 9.535156 21.332031 21.332031v129.835938l100.417969 100.414062c8.339844 8.34375 8.339844 21.824219 0 30.164062zm0 0"
                      fill="#808080"
                    />
                  </svg>
                  <span>recent location</span>
                </div>
                <div className="rl-sections">
                  <svg
                    height="20px"
                    viewBox="0 0 512 512"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm121.75 388.414062c-4.160156 4.160157-9.621094 6.253907-15.082031 6.253907-5.460938 0-10.925781-2.09375-15.082031-6.253907l-106.667969-106.664062c-4.011719-3.988281-6.25-9.410156-6.25-15.082031v-138.667969c0-11.796875 9.554687-21.332031 21.332031-21.332031s21.332031 9.535156 21.332031 21.332031v129.835938l100.417969 100.414062c8.339844 8.34375 8.339844 21.824219 0 30.164062zm0 0"
                      fill="#808080"
                    />
                  </svg>
                  <span>recent location</span>
                </div>
              </div>
              <div className="traffic">
                <div className="trafficHeader">Traffic Updates</div>
                <div className="trafficDetail">
                  <ul>
                    <li style={{ marginTop: '0rem' }}>
                      <span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </span>
                    </li>
                    <li>
                      <span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </span>
                    </li>
                    <li>
                      <span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <button onClick={() => startNav(starting, ending)}>
                Start Nav
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Navbar;
