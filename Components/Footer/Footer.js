import React from 'react';
import styles from './Footer.module.scss';
import Logo from '../../public/assets/wenfoods.png';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className={`${styles.footer} d-flex flex-column`}>
      <main className='d-flex flex-column flex-md-row  justify-content-between align-items-center'>
        {/* Logo */}
        <section
          className={`${styles.logo} col-12 col-md-4  d-flex flex-column`}
        >
          <figure>
            {' '}
            <Image
              className='col-12 col-md-3'
              src={Logo}
              alt='Wen Foods Logo'
            />{' '}
          </figure>
          {/* <div>
            {' '}
            <p>
              {' '}
              We offers comprehensive assistance with work visas, study visas,
              permanent residency, citizenship, business visas, and tourist
              visas.
            </p>{' '}
          </div> */}
        </section>
        <section className='d-flex flex-row col-12 col-md-2 justify-content-between'>
          <small> Follow us on: </small>
          <FaInstagram size={30} color='var(--mainColor)' />
        </section>
      </main>
    </div>
  );
}

export default Footer;
