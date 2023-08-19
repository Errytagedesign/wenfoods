import React from 'react';
import styles from './HeroSection.module.scss';

function HotOfferHero({ bgUrl, title }) {
  return (
    <section
      style={{
        backgroundColor: ' var(--mainColor) ',
        backgroundImage: `url('${bgUrl}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
      className={styles.globalHero}
    >
      <div className={styles.globalHeroTitle}>
        <h2
          data-aos='fade-up-right'
          data-aos-duration='1500'
          className='col-12 col-md-6 mx-auto'
        >
          {' '}
          {title}
        </h2>
      </div>
    </section>
  );
}

export default HotOfferHero;
