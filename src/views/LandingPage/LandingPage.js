import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './LandingPage.module.css';

import { ReactComponent as Ambulance } from '../../assets/ambulance.svg';

const Modal = ({ mode, closemodal }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <>
      <div
        className={styles.modal_container}
        onClick={() => closemodal(null)}
      />

      <div className={styles.modal}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h1>{mode}</h1>
          {mode === 'Sign Up' ? (
            <>
              <span className={styles.entry}>
                <label className={styles.label}>Name*</label>
                <input
                  name="name"
                  type="text"
                  className={styles.input}
                  placeholder="Enter your Name"
                  ref={register({ required: true })}
                />
                {errors.name && (
                  <h3 className={styles.errors}> '*This field is required'</h3>
                )}
              </span>
            </>
          ) : null}
          <span className={styles.entry}>
            <label className={styles.label}>E-mail*</label>
            <input
              name="email"
              type="email"
              className={styles.input}
              placeholder="Enter your email address"
              ref={register({ required: true })}
            />
            {errors.email && (
              <h3 className={styles.errors}> '*This field is required'</h3>
            )}
          </span>
          <span className={styles.entry}>
            <label className={styles.label}>Password*</label>
            <input
              name="password"
              type="password"
              className={styles.input}
              placeholder="Enter password of minimum length 6"
              ref={register({ required: true, minLength: 6 })}
            />
            {errors.password && (
              <h3 className={styles.errors}> '*This field is required'</h3>
            )}
          </span>
          {mode === 'Sign Up' ? (
            <>
              <span className={styles.entry}>
                <label className={styles.label}>Phone</label>
                <input
                  name="phone"
                  type="phone"
                  className={styles.input}
                  placeholder="Enter your Phone number"
                />
              </span>
              <div className={styles.checkbox}>
                <label>Priority User</label>
                <input name="priority" type="checkbox" />
              </div>
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

const LandingPage = () => {
  const [isModalOpen, changeIsModalOpen] = useState(null);
  return (
    <div className={styles.gridcontainer}>
      {isModalOpen ? (
        <Modal mode={isModalOpen} closemodal={changeIsModalOpen} />
      ) : null}
      <div className={styles.item1}> </div>
      <div className={styles.center}>
        <div className={styles.item2}>Welcome to</div>

        <div className={styles.item3}>
          <h1 className={styles.h1}>PRIMAL</h1>
        </div>
      </div>

      <div className={styles.item4}>
        <div className={styles.box}>
          <span className={styles.rounded}>
            <button
              className={styles.button}
              onClick={() => changeIsModalOpen('Sign Up')}
            >
              <span> Sign Up</span>
            </button>
            <button
              className={styles.button}
              onClick={() => changeIsModalOpen('Sign In')}
            >
              <span>Sign In </span>
            </button>
          </span>
        </div>
      </div>

      <div className={styles.verticalLine}></div>

      <div className={styles.item5}>
        <div className={styles.center2}>
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
            <a href="# Privacy Policy">Privacy Policy</a>
            <span>|</span>
            <a href="# Terms & Conditions">Terms & Conditions</a>
          </div>
        </div>
      </div>

      <div className={styles.item8}> </div>
    </div>
  );
};

export default LandingPage;
