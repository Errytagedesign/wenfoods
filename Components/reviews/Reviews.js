'use client';

import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import Slider from 'react-slick';

import styles from './Review.module.scss';

function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Fakunle',
      job: 'Optical Doctor ',
      comment:
        '“Best travel agency in Nigeria. Trusted and reliable. I got my canada study visa within 48hrs after payment.” ',
    },
    {
      id: 2,
      name: 'Chinedu',
      job: 'Software enginner',
      comment:
        '“Nice review, I really enjoy and appreciate the service. Fast and reliable, tested and trust. Leben travel and tour for real.” ',
    },
    {
      id: 3,
      name: 'Abubarkar',
      job: 'Fire fighter',
      comment:
        'They are truthful and honest, my brother got his France visa through Destiny travels and tours. ',
    },
    {
      id: 4,
      name: 'Adegoke',
      job: 'Fire fighter',
      comment:
        'Customer friendly and reliable, my sister got her Ghana admission and visa through Destiny travels and tours. ',
    },
    {
      id: 5,
      name: 'Buhari',
      job: 'Fire fighter',
      comment:
        '“Most reliable travel agency in Nigeria. Trusted and honest. I got my shengen visa within 48hrs after payment.”',
    },
  ];
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
          slidesToScroll: 2,
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
    <main className={styles.reviews}>
      <Slider className='reviewsSlider' {...settings}>
        {reviews.map(({ id, name, comment }) => (
          <section key={id} className={`${styles.contents} col-12 `}>
            <span className={styles.qoutes}>
              <FaQuoteLeft />
            </span>
            <blockquote className='col-12 col-md-11 mx-auto'>
              <p> {comment} </p>
            </blockquote>
            <p className={styles.name}> {name}</p>
            {/* <small> {job} </small> */}
          </section>
        ))}
      </Slider>
    </main>
  );
}

export default Reviews;
