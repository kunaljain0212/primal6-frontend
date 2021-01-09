import React from 'react';
import './Profile.styles.css';
import test from '../../assets/test.png';
import { IconContext } from 'react-icons';
import { AiOutlineCloseSquare } from 'react-icons/ai';

const Profile = ({ isProf, closeProf }) => {
  return (
    <>
      {isProf === 'profileOpen' ? (
        <>
          <div className="container">
            <div className="profileContainer">
              <div className="profileHeading">
                <div className="profileHeadingData">
                  <span className="spanName">Kunal Jain</span>
                  <span className="spanEmail">jainkunal209@gmail.com</span>
                </div>
                <div className="profileImageContainer">
                  <div className="profileImage">
                    <img
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                      }}
                      src={test}
                      alt=""
                    />
                  </div>
                </div>
                <div className="profileClose" onClick={() => closeProf(null)}>
                  <IconContext.Provider
                    value={{ size: '30px', color: '#00a8ff' }}
                  >
                    <AiOutlineCloseSquare />
                  </IconContext.Provider>
                </div>
              </div>
              <div className="profileMenu">
                <div className="profileMenuOptionsActive">
                  <svg
                    className="svgMenuOptionActive"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    height="20px"
                    width="20px"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: 'new 0 0 512 512' }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path d="M256,0c-74.439,0-135,60.561-135,135s60.561,135,135,135s135-60.561,135-135S330.439,0,256,0z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M423.966,358.195C387.006,320.667,338.009,300,286,300h-60c-52.008,0-101.006,20.667-137.966,58.195
			C51.255,395.539,31,444.833,31,497c0,8.284,6.716,15,15,15h420c8.284,0,15-6.716,15-15
			C481,444.833,460.745,395.539,423.966,358.195z"
                        />
                      </g>
                    </g>
                  </svg>
                  <span className="spanMenuOptionActive">Profile</span>
                </div>
                <div className="profileMenuOptions">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: 'new 0 0 512 512' }}
                    xmlSpace="preserve"
                    width="20px"
                    height="20px"
                  >
                    <g>
                      <path d="M468.329,358.972c-7.263-3.989-16.382-1.336-20.369,5.924c-3.989,7.261-1.337,16.381,5.924,20.369   C471.752,395.081,482,405.963,482,415.121c0,11.201-15.87,28.561-60.413,43.694C377.582,473.767,318.775,482,256,482   s-121.582-8.233-165.587-23.185C45.87,443.683,30,426.322,30,415.121c0-9.158,10.248-20.04,28.116-29.857   c7.261-3.988,9.913-13.108,5.924-20.369c-3.989-7.26-13.106-9.913-20.369-5.924C23.749,369.916,0,388.542,0,415.121   c0,20.374,14.012,49.422,80.762,72.1C127.794,503.2,190.028,512,256,512s128.206-8.8,175.238-24.779   c66.75-22.678,80.762-51.726,80.762-72.1C512,388.542,488.251,369.916,468.329,358.972z" />
                      <path d="M142.752,437.13c30.45,8.602,70.669,13.34,113.248,13.34s82.798-4.737,113.248-13.34   c37.253-10.523,56.142-25.757,56.142-45.275c0-19.519-18.889-34.751-56.142-45.274c-8.27-2.336-17.264-4.385-26.826-6.133   c-5.193,8.972-10.634,18.207-16.323,27.708c10.584,1.588,20.521,3.535,29.545,5.834c27.416,6.983,37.432,14.844,39.491,17.866   c-2.06,3.023-12.074,10.884-39.49,17.866c-25.949,6.609-59.335,10.379-94.498,10.716c-1.703,0.126-3.419,0.197-5.147,0.197   c-1.729,0-3.444-0.071-5.148-0.197c-35.163-0.337-68.549-4.106-94.498-10.716c-27.416-6.982-37.431-14.844-39.49-17.866   c2.059-3.022,12.075-10.883,39.491-17.866c9.024-2.298,18.961-4.246,29.546-5.834c-5.689-9.5-11.13-18.737-16.323-27.708   c-9.562,1.749-18.557,3.797-26.826,6.133c-37.253,10.523-56.142,25.756-56.142,45.274   C86.61,411.373,105.499,426.606,142.752,437.13z" />
                      <path d="M256,390.634c13.353,0,25.482-6.804,32.448-18.201c48.81-79.857,106.992-185.103,106.992-232.994   C395.44,62.552,332.888,0,256,0S116.56,62.552,116.56,139.439c0,47.891,58.183,153.137,106.992,232.994   C230.518,383.83,242.648,390.634,256,390.634z M199.953,129.865c0-30.903,25.143-56.045,56.047-56.045s56.047,25.142,56.047,56.045   c0,30.904-25.143,56.046-56.047,56.046S199.953,160.77,199.953,129.865z" />
                    </g>
                  </svg>
                  <span className="spanMenuOption">Location Sharing</span>
                </div>
                <div className="profileMenuOptions">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: 'new 0 0 512 512' }}
                    xmlSpace="preserve"
                    width="20px"
                    height="20px"
                  >
                    <g>
                      <g>
                        <path
                          d="M500.6,212.6l-59.9-14.7c-3.3-10.5-7.5-20.7-12.6-30.6l30.6-51c3.6-6,2.7-13.5-2.1-18.3L414,55.4
   c-4.8-4.8-12.3-5.7-18.3-2.1l-51,30.6c-9.9-5.1-20.1-9.3-30.6-12.6l-14.4-59.9C297.9,4.8,291.9,0,285,0h-60
   c-6.9,0-12.9,4.8-14.7,11.4l-14.4,59.9c-10.5,3.3-20.7,7.5-30.6,12.6l-51-30.6c-6-3.6-13.5-2.7-18.3,2.1L53.4,98
   c-4.8,4.8-5.7,12.3-2.1,18.3l30.6,51c-5.1,9.9-9.3,20.1-12.6,30.6l-57.9,14.7C4.8,214.1,0,220.1,0,227v60
   c0,6.9,4.8,12.9,11.4,14.4l57.9,14.7c3.3,10.5,7.5,20.7,12.6,30.6l-30.6,51c-3.6,6-2.7,13.5,2.1,18.3L96,458.6
   c4.8,4.8,12.3,5.7,18.3,2.1l51-30.6c9.9,5.1,20.1,9.3,30.6,12.6l14.4,57.9c1.8,6.6,7.8,11.4,14.7,11.4h60
   c6.9,0,12.9-4.8,14.7-11.4l14.4-57.9c10.5-3.3,20.7-7.5,30.6-12.6l51,30.6c6,3.6,13.5,2.7,18.3-2.1l42.6-42.6
   c4.8-4.8,5.7-12.3,2.1-18.3l-30.6-51c5.1-9.9,9.3-20.1,12.6-30.6l59.9-14.7c6.6-1.5,11.4-7.5,11.4-14.4v-60
   C512,220.1,507.2,214.1,500.6,212.6z M255,332c-41.4,0-75-33.6-75-75c0-41.4,33.6-75,75-75c41.4,0,75,33.6,75,75
   C330,298.4,296.4,332,255,332z"
                        />
                      </g>
                    </g>
                  </svg>
                  <span className="spanMenuOption">Settings</span>
                </div>
                <div className="profileMenuOptions">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    height="20px"
                    width="20px"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: 'new 0 0 512 512' }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path d="M256,0c-74.439,0-135,60.561-135,135s60.561,135,135,135s135-60.561,135-135S330.439,0,256,0z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M423.966,358.195C387.006,320.667,338.009,300,286,300h-60c-52.008,0-101.006,20.667-137.966,58.195
			C51.255,395.539,31,444.833,31,497c0,8.284,6.716,15,15,15h420c8.284,0,15-6.716,15-15
			C481,444.833,460.745,395.539,423.966,358.195z"
                        />
                      </g>
                    </g>
                  </svg>
                  <span className="spanMenuOption">Profile</span>
                </div>
              </div>
              <div className="driveEmergencyContainer">
                <div className="driveEmergency">
                  <button className="driveEmergencyButtonActive driveEmergencyButton">
                    Drive
                  </button>
                  <button className="driveEmergencyButton">Emergency</button>
                </div>
              </div>
              <div className="pptac">
                <span className="pptacText">Privacy Policy</span>
                <span className="pptacText">|</span>
                <span className="pptacText">Terms & Conditions</span>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Profile;
