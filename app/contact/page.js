import React from 'react';
import { BsHouse, BsPhone, BsSend } from 'react-icons/bs';
import styles from './Contact.module.scss';
import Herosection from '@/Components/HeroSection/GlobalHero';
import { FiMail } from 'react-icons/fi';

function Contact() {
  return (
    <main className={`${styles.contact}`}>
      <Herosection styles={styles} title=' Contact Us' />
      <section className=' container d-flex flex-column flex-md-row justify-content-between my-5 py-5'>
        <article className='d-flex flex-column col-12 col-md-6'>
          <div>
            <h3>Location and Distributors </h3>
          </div>
          <ul
            className={`${styles.contactList} d-flex flex-column justify-content-between  mt-5 mb-3`}
          >
            {/* <li className='d-flex flex-row justify-content-between '>
              <div className={`${styles.Icons} me-3 `}>
                <BsHouse />
              </div>
              <address>
                Suit 14B, Second floor, SAY Plaza, Plot23 AE, Ekukinam street,
                Utako, Abuja, FCT.
              </address>
            </li> */}
            <li className='d-flex flex-row align-items-center col-12 col-md-10 col-lg-6'>
              <div className={`${styles.Icons}  me-3`}>
                <BsPhone />
              </div>
              <div>
                Abuja:
                <a className='ms-1' href='tel: +2348184505363'>
                  +2348184505363
                </a>
              </div>
            </li>
            <li className='d-flex flex-row align-items-center col-12 col-md-10 col-lg-6'>
              <div className={`${styles.Icons}  me-3`}>
                <BsPhone />
              </div>
              <div>
                Lagos Island: <br />
                <a className='' href='tel: +2348034013840'>
                  +2348034013840
                </a>
              </div>
            </li>
            <li className='d-flex flex-row align-items-center col-12 col-md-10 col-lg-6'>
              <div className={`${styles.Icons}  me-3`}>
                <BsPhone />
              </div>
              <div>
                Lagos Ikeja: <br />
                <a className='' href='tel: +2348060420628'>
                  +2348060420628
                </a>
              </div>
            </li>
            <li className='d-flex flex-row align-items-center col-12 col-md-10 col-lg-6'>
              <div className={`${styles.Icons}  me-3`}>
                <BsPhone />
              </div>
              <div>
                Port harcourt: <br />
                <a className='' href='tel: +2348033101533'>
                  +2348033101533
                </a>
              </div>
            </li>
            <li className='d-flex flex-row align-items-center col-12 col-md-10 col-lg-6'>
              <div className={`${styles.Icons}  me-3`}>
                <BsPhone />
              </div>
              <div>
                United Kingdom: <br />
                <a className='' href='tel: +447417558135'>
                  +447417558135
                </a>
              </div>
            </li>

            {/* <li className='d-flex flex-row align-items-center'>
              <div className={`${styles.Icons} me-3`}>
                <FiMail />
              </div>

              <a href='mailto: info@destineytravelandtours.com'>
                info@destineytravelandtours.com
              </a>
            </li> */}
          </ul>

          <hr />
          <ul className={styles.market}>
            <p> Also available at</p>
            <li>shoprite</li>
            <li>Ebano</li>
            <li>Idumota market</li>
          </ul>
        </article>
        <aside className={`${styles.form}  col-12 col-md-5 mt-5 mt-md-0`}>
          <h3 className='mb-5'>
            Send us a message and we will get back to you
          </h3>
          <form>
            <input
              type='text'
              placeholder='Your name'
              className='form-control mb-3'
              required
            />
            <input
              type='email'
              placeholder='Your email'
              className='form-control mb-3'
              required
            />
            <input
              type='number'
              placeholder='Your number'
              className='form-control mb-3'
              required
            />

            <textarea
              name='messgae'
              id='booking-message'
              cols='10'
              rows='5'
              className='form-control mb-3'
              placeholder='Message *'
              required
            ></textarea>

            <div className='col-12'>
              <button type='submit' className='sec-btn mt-3 col-12'>
                <BsSend /> SUBMIT
              </button>
            </div>
          </form>{' '}
        </aside>
      </section>
    </main>
  );
}

export default Contact;
