'use client';

import React from 'react';
import styles from './HotOffers.module.scss';
import Slider from 'react-slick';
import { hotOffersData } from './HotOfferData';
import Image from 'next/image';
import Link from 'next/link';

function OffersSlde() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={`OfferSlider ${styles.OfferSlide}`}>
      <section data-aos='fade-up' className='text-center section-title'>
        <h3> Hot Offers </h3>
        <div className='line'></div>
      </section>
      <section className='container'>
        <Slider {...settings}>
          {hotOffersData.map(({ id, title, imageUrl, alt, url }) => (
            <article className={`${styles.OfferCard}  `} key={id}>
              <section
                className={`card mt-5 d-flex flex-column justify-content-center align-items-center col-12 col-md-11 `}
              >
                <figure className='card-image'>
                  <Image src={imageUrl} alt={alt} />
                </figure>
                <div className='card-body'>
                  <h4 className='card-title'>{title} </h4>
                  {/* <p className='card-text'>{subtitle.slice(0, 100)}... </p> */}
                </div>

                <div>
                  <button className='main-btn my-3'>
                    {' '}
                    <Link href={url}> Apply Now </Link>{' '}
                  </button>
                </div>
              </section>
            </article>
          ))}
        </Slider>{' '}
      </section>
    </section>
  );
}

export default OffersSlde;
