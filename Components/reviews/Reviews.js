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
      job: 'Lagos, Nigeria',
      comment:
        "Absolutely love the fragrance and taste of their Basmati rice! It's become a staple in my kitchen.",
    },
    {
      id: 2,
      name: 'Chinedu',
      job: 'Abuja, Nigeria',
      comment:
        'Finally found 507 Basmati rice, that\'s worth every penny. Such a delightful addition to our meals."',
    },
    {
      id: 3,
      name: 'Abubarkar',
      job: 'Kano, Nigeria',
      comment:
        'Exquisite Duru Bulgur Basmati rice varieties that make every dish extraordinary. A must-try for food enthusiasts.',
    },
    {
      id: 4,
      name: 'Adegoke',
      job: 'Ibadan, Nigeria',
      comment:
        '"Healthy and delicious options all in one place. Their Basmati rice is a game-changer."',
    },
    {
      id: 5,
      name: 'Ogechukwu',
      job: 'Anambra',
      comment:
        'Top-notch quality and excellent customer service. This store is my go-to for the best Basmati rice.',
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
        {reviews.map(({ id, name, comment, job }) => (
          <section key={id} className={`${styles.contents} col-12 `}>
            <span className={styles.qoutes}>
              <FaQuoteLeft />
            </span>
            <blockquote className='col-12 col-md-11 mx-auto'>
              <p> {comment} </p>
            </blockquote>
            <p className={styles.name}> {name}</p>
            <small> {job} </small>
          </section>
        ))}
      </Slider>
    </main>
  );
}

export default Reviews;
