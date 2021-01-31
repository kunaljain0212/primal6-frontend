import React from 'react';
import styles from './EmgReq.module.css';
import { FaPlusSquare } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

function EmgReq() {
  return (
    <>
      <div className={styles.modal_container} />

      <div className={styles.modal}>
        <form className={styles.form}>
          <div className={styles.head}>
            <div className={styles.plusalt} />
            <div className={styles.heading}>Emergency Request</div>
          </div>

          <span className={styles.entry}>
            <label className={styles.label} style={{ marginTop: '2rem' }}>
              Location
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                height="25px"
                width="25px"
                viewBox="0 0 512 512"
                style={{
                  enableBackground: 'new 0 0 512 512',
                  fill: 'black',
                  marginLeft: '1rem',
                  marginTop: '1rem',
                }}
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M468.329,358.972c-7.263-3.989-16.382-1.336-20.369,5.924c-3.989,7.261-1.337,16.381,5.924,20.369   C471.752,395.081,482,405.963,482,415.121c0,11.201-15.87,28.561-60.413,43.694C377.582,473.767,318.775,482,256,482   s-121.582-8.233-165.587-23.185C45.87,443.683,30,426.322,30,415.121c0-9.158,10.248-20.04,28.116-29.857   c7.261-3.988,9.913-13.108,5.924-20.369c-3.989-7.26-13.106-9.913-20.369-5.924C23.749,369.916,0,388.542,0,415.121   c0,20.374,14.012,49.422,80.762,72.1C127.794,503.2,190.028,512,256,512s128.206-8.8,175.238-24.779   c66.75-22.678,80.762-51.726,80.762-72.1C512,388.542,488.251,369.916,468.329,358.972z"
                    fill="black"
                  />
                  <path
                    d="M142.752,437.13c30.45,8.602,70.669,13.34,113.248,13.34s82.798-4.737,113.248-13.34   c37.253-10.523,56.142-25.757,56.142-45.275c0-19.519-18.889-34.751-56.142-45.274c-8.27-2.336-17.264-4.385-26.826-6.133   c-5.193,8.972-10.634,18.207-16.323,27.708c10.584,1.588,20.521,3.535,29.545,5.834c27.416,6.983,37.432,14.844,39.491,17.866   c-2.06,3.023-12.074,10.884-39.49,17.866c-25.949,6.609-59.335,10.379-94.498,10.716c-1.703,0.126-3.419,0.197-5.147,0.197   c-1.729,0-3.444-0.071-5.148-0.197c-35.163-0.337-68.549-4.106-94.498-10.716c-27.416-6.982-37.431-14.844-39.49-17.866   c2.059-3.022,12.075-10.883,39.491-17.866c9.024-2.298,18.961-4.246,29.546-5.834c-5.689-9.5-11.13-18.737-16.323-27.708   c-9.562,1.749-18.557,3.797-26.826,6.133c-37.253,10.523-56.142,25.756-56.142,45.274   C86.61,411.373,105.499,426.606,142.752,437.13z"
                    fill="black"
                  />
                  <path
                    d="M256,390.634c13.353,0,25.482-6.804,32.448-18.201c48.81-79.857,106.992-185.103,106.992-232.994   C395.44,62.552,332.888,0,256,0S116.56,62.552,116.56,139.439c0,47.891,58.183,153.137,106.992,232.994   C230.518,383.83,242.648,390.634,256,390.634z M199.953,129.865c0-30.903,25.143-56.045,56.047-56.045s56.047,25.142,56.047,56.045   c0,30.904-25.143,56.046-56.047,56.046S199.953,160.77,199.953,129.865z"
                    fill="black"
                  />
                </g>
              </svg>
            </label>
            <div className={styles.start}>
              <input type="text" placeholder="dummy street, dummy road" />
            </div>
          </span>
          <span className={styles.entry}>
            <label className={styles.label} style={{ marginTop: '1rem' }}>
              Description
            </label>
            <div className={styles.start}>
              <textarea
                className={styles.text}
                type="text"
                placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
              />
            </div>
          </span>

          <button type="submit" className={styles.button1}>
            Accept
          </button>
          <button type="submit" className={styles.button2}>
            Decline
          </button>
        </form>
      </div>
    </>
  );
}
export default EmgReq;
