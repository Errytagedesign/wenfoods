'use client';

import React, { useState } from 'react';

// icons
import { BsChevronDown } from 'react-icons/bs';
import Logo from '../../public/assets/wenfoods.png';
// styles
import styles from './NavBar.module.scss';

import Link from 'next/link';
import Image from 'next/image';

function NavBar() {
  const [navbar, setNavbar] = useState(true);

  const handleNav = () => {
    setNavbar(!navbar);
  };

  return (
    <div>
      <section className={styles.navContainer}>
        <nav className='d-flex container flex-row align-items-center justify-content-between pt-3'>
          {/* Logo */}
          <Link
            href='/'
            className={`col-8 col-md-3 d-flex flex-row align-items-center ${styles.logo}`}
          >
            <figure className='col-4'>
              <Image src={Logo} alt=' Wen Foods Logo' />
            </figure>
          </Link>
          <div
            className={` col-12 col-lg-6 d-flex flex-column flex-lg-row justify-content-between ${
              navbar ? styles.displayNav : styles.navMove
            }`}
          >
            <aside className='col-12  d-flex flex-column flex-lg-row justify-content-lg-end '>
              {/* nav Links */}
              <ul
                className={`${styles.navUl} col-12 col-lg-7 d-flex flex-column flex-lg-row justify-content-between`}
              >
                {/* explore */}
                <li onClick={handleNav} className={` ${styles.navItems} `}>
                  {' '}
                  <Link href='/'> Home </Link>
                </li>

                <li onClick={handleNav} className={` ${styles.navItems} `}>
                  {' '}
                  <Link href='/about'> About us </Link>
                </li>
                <li className={` ${styles.navItems} `}>
                  {' '}
                  <Link onClick={handleNav} href='/contact'>
                    {' '}
                    Contact us{' '}
                  </Link>
                </li>
              </ul>
            </aside>
          </div>
          {/* Hambuger icon */}
          <div
            onClick={handleNav}
            className={navbar ? styles.ham : styles.open}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default NavBar;
