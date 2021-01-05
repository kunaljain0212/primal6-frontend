import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Profile from '../Profile/Profile';
import styles from './Sidebar.module.css';
import { useForm } from 'react-hook-form';
import { IconContext } from 'react-icons';
import { BiArrowBack, BiCurrentLocation } from 'react-icons/bi';
import { GiStack } from 'react-icons/gi';
import { MdNavigation, MdClose } from 'react-icons/md';
import { RiUpload2Fill } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';

import { FiArrowUpRight } from 'react-icons/fi';

import {
  FaAngleLeft,
  FaCompass,
  FaHome,
  FaMapMarkerAlt,
  FaSearch,
  FaPlusSquare,
} from 'react-icons/fa';

const Modal = ({ mode, closemodal }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <>
      <div className={styles.modal_container} />

      <div className={styles.modal}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.head}>
            <div className={styles.heading}>{mode}</div>
            <div className={styles.close} onClick={() => closemodal(null)}>
              <IconContext.Provider value={{ size: '50px', color: 'white' }}>
                <MdClose />
              </IconContext.Provider>
            </div>
          </div>
          {mode === 'Raise an Emergency' ? (
            <>
              <span className={styles.entry}>
                <label className={styles.label}>Location</label>
                <input
                  name="name"
                  type="text"
                  className={styles.input}
                  placeholder="Enter Location"
                  ref={register({ required: true })}
                />
              </span>
              <span className={styles.entry}>
                <label className={styles.label} style={{ marginTop: '0.3rem' }}>
                  Description
                </label>

                <textarea placeholder="What is the emergency"></textarea>
              </span>
              <span className={styles.entry}>
                <label className={styles.label} style={{ marginTop: '0.3rem' }}>
                  Upload photo
                </label>
                <div className={styles.pic}>
                  <IconContext.Provider
                    value={{ size: '30px', color: '#303030' }}
                  >
                    <RiUpload2Fill />
                  </IconContext.Provider>
                </div>
              </span>
            </>
          ) : null}
          <button type="submit" className={styles.submitbutton}>
            <span>Submit</span>
          </button>
        </form>
      </div>
    </>
  );
};
const Rightbar = ({ bar, closebar }) => {
  return (
    <>
      {bar === 'rightsidebar' ? (
        <>
          <div id="rightsidebar" className={styles.rightsidebar}>
            <IconContext.Provider value={{ size: '40px', color: '#303030' }}>
              <div className={styles.arrow} onClick={() => closebar(null)}>
                <BiArrowBack />
              </div>
            </IconContext.Provider>
            <form>
              <input type="search" placeholder="        Find Anything" />
            </form>
            <IconContext.Provider value={{ size: '25px', color: '#303030' }}>
              <div className={styles.search}>
                <FaSearch />
              </div>
            </IconContext.Provider>
          </div>
        </>
      ) : null}
    </>
  );
};
const MapOptions = ({ option, closeOption }) => {
  return (
    <>
      {option === 'map-options' ? (
        <>
          <div className={styles.mapoptions}>
            <IconContext.Provider value={{ size: '30px', color: '#303030' }}>
              <div>
                <FaAngleLeft onClick={() => closeOption(null)} />

                <BiCurrentLocation />

                <GiStack />
                <MdNavigation />
              </div>
            </IconContext.Provider>
          </div>
        </>
      ) : null}
    </>
  );
};

const Sidebar = () => {
  const [isModalOpen, changeIsModalOpen] = useState(null);
  const [isBarOpen, changeIsBarOpen] = useState(null);
  const [isOptionOpen, changeIsOptionOpen] = useState(null);
  const [isNavOpen, setIsNav] = useState(null);
  const [isProfOpen, setProf] = useState(null);

  return (
    <div style={{ position: 'fixed', zIndex: '100' }}>
      {isBarOpen ? (
        <Rightbar bar={isBarOpen} closebar={changeIsBarOpen} />
      ) : null}
      {isModalOpen ? (
        <Modal mode={isModalOpen} closemodal={changeIsModalOpen} />
      ) : null}
      {isOptionOpen ? (
        <MapOptions option={isOptionOpen} closeOption={changeIsOptionOpen} />
      ) : null}
      {isNavOpen ? <Navbar isNav={isNavOpen} closeNav={setIsNav} /> : null}
      {isProfOpen ? <Profile isProf={isProfOpen} closeProf={setProf} /> : null}

      <div onClick={() => changeIsBarOpen('rightsidebar')}>
        <span className={styles.rightbar}>
          <IconContext.Provider value={{ size: '40px', color: '#303030' }}>
            <BiArrowBack />
          </IconContext.Provider>
        </span>
      </div>

      <div onClick={() => changeIsOptionOpen('map-options')}>
        <span className={styles.mapOp}>
          <IconContext.Provider value={{ size: '35px', color: '#303030' }}>
            <div>
              <FaAngleLeft />
            </div>
          </IconContext.Provider>
        </span>
      </div>

      <div onClick={() => changeIsModalOpen('Raise an Emergency')}>
        <span className={styles.emergencyButton}>
          <IconContext.Provider value={{ size: '75px', color: '#00a8ff' }}>
            <FaPlusSquare />
          </IconContext.Provider>
        </span>
      </div>

      <div className={styles.sidebar} id="sidebar">
        <div className={styles.plusalt}></div>
        <IconContext.Provider value={{ size: '35px' }}>
          <div className={styles.Side}>
            <a href="#">
              <FaHome />
            </a>
          </div>
        </IconContext.Provider>
        <span className={styles.menulabel}>Home</span>
        <IconContext.Provider value={{ size: '40px' }}>
          <div onClick={() => setIsNav('navbaropen')}>
            <a href="#">
              <FiArrowUpRight />
            </a>
          </div>
        </IconContext.Provider>
        <span className={styles.menulabel}>Navigation</span>
        <IconContext.Provider value={{ size: '35px' }}>
          <div>
            <a href="#">
              <FaCompass />
            </a>
          </div>
        </IconContext.Provider>
        <span className={styles.menulabel}>Browse</span>
        <IconContext.Provider value={{ size: '35px' }}>
          <div>
            <a href="#">
              <FaMapMarkerAlt />
            </a>
          </div>
        </IconContext.Provider>
        <span className={styles.menulabel}>Places</span>
        <IconContext.Provider value={{ size: '35px' }}>
          <div onClick={() => setProf('profileOpen')}>
            <a href="#">
              <CgProfile />
            </a>
          </div>
        </IconContext.Provider>
        <span className={styles.menulabel}>Profile</span>
      </div>
    </div>
  );
};

export default Sidebar;
