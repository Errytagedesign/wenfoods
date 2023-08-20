'use client';

import React from 'react';
import styles from './HeroSection.module.scss';
import Image from 'next/image';
import { heroData } from './HeroSectionData';
import Slider from 'react-slick';

const HeroSliders = ({ title, subtitle, imageUrl, bgUrl }) => {
  return (
    <section
      style={{
        background: `url('${bgUrl}') no-repeat`,
        backgroundSize: 'cover',
      }}
      className={`d-flex flex-column flex-lg-row justify-content-around align-items-center ${styles.hero}`}
    >
      <div className='col-12 col-lg-5'>
        <h1 data-aos='fade-up'> {title}</h1>
        <p data-aos='fade-up'>{subtitle}</p>
      </div>
      <figure data-aos='zoom-in' className='col-12 col-lg-6'>
        <Image className='col-12' src={imageUrl} alt='Wen Foods Basmati rice' />
      </figure>
    </section>
  );
};

function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section>
      <Slider className='HomeHero' {...settings}>
        {heroData.map(({ id, imageUrl, title, subtitle, bgUrl }) => (
          <HeroSliders
            key={id}
            imageUrl={imageUrl}
            title={title}
            subtitle={subtitle}
            bgUrl={bgUrl}
          />
        ))}
      </Slider>
    </section>
  );
}

export default HeroSection;
