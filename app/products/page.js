import React from 'react';
import HotOffers from '@/Components/HotOffers/HotOffers';

import styles from './Products.module.scss';
import Herosection from '@/Components/HeroSection/GlobalHero';

export default function page() {
  return (
    <main className={styles.products}>
      <Herosection styles={styles} title='Our Trending Products' />
      <section data-aos='zoom-in' className={styles.hotOffers}>
        <section data-aos='fade-up' className='text-center section-title'>
          <h3> Trending Products </h3>
          <div className='line'></div>
        </section>
        <HotOffers />
      </section>
    </main>
  );
}
