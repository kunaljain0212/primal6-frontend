import React from 'react';
import styles from './alertBox.module.css';
import { IconContext } from 'react-icons';
import { FaPlusSquare } from 'react-icons/fa';

import { MdClose } from 'react-icons/md';

function alertBox() {
  return (
    <>
      <div className={styles.alertBox}>
        <div className={styles.left}>
          <div className={styles.plus}>
            <IconContext.Provider value={{ size: '70px', color: 'white' }}>
              <FaPlusSquare />
            </IconContext.Provider>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.cross}>
            <IconContext.Provider value={{ size: '30px', color: 'white' }}>
              <MdClose />
            </IconContext.Provider>
          </div>
          <h2 className={styles.h2}>EMERGENCY ALERT!</h2>

          <p className={styles.p}>
            There's an
            <b> Ambulance </b>
            passing by in your path, <b>please make way.</b>
          </p>
        </div>
      </div>
    </>
  );
}
export default alertBox;
