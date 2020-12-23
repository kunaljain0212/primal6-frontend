import React from 'react';
import styles from './LandingPage.module.css';

import { ReactComponent as Ambulance } from '../../assets/ambulance.svg';

const LandingPage= () => {return (
<div className={styles.gridcontainer}>
    <div className={styles.item1}> </div>
    <div  className={styles.center}>
        <div className={styles.item2}> 
   
        Welcome to
        </div>
      
        <div className={styles.item3}> 
       
            <h1 className={styles.h1}>PRIMAL</h1>
            
        </div>
    </div>
    
    <div className={styles.item4}> 
        <div className={styles.box}> 
        < button className={styles.button} >

            <span> Sign Up</span></button>
        <button className={styles.button} >

            <span>Sign In </span></button>
        </div>
    </div>

    <div className={styles.item5}>
        <div  className={styles.center2}>
            <Ambulance className={styles.ambulance} />
        </div> 
    </div>

    <div className={styles.item6}> 
        <div className={styles.quote}>
            Better and faster emergency care during accidents and vehicle impact.
        </div>
    </div>

    <div className={styles.item7}> 
        <div className={styles.footer}>
            <div className={styles.topnav}>
                <a  href="# Privacy Policy" >Privacy Policy</a>
                <a  href="# Terms & Conditions" >Terms & Conditions</a>
            </div>
        </div>
    </div>

    <div className={styles.item8}> </div>
</div>    
);
};


export default LandingPage;
