import React from 'react';

function Herosection({ styles, title }) {
  return (
    <section className={styles.globalHero}>
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

export default Herosection;
