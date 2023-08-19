'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { images } from '../../exports/images';
import styles from './Places.module.scss';
import Slider from 'react-slick';

function Places() {
  const slideSettings = {
    className: 'slider variable-width',
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
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
  const places = [
    {
      id: 1,
      caption: '🇨🇦CANADA',
      imageUrl: images.CANADA,
    },
    {
      id: 2,
      caption: '🇨🇦AUSTRALIA',
      imageUrl: images.AUSTRALIA,
    },
    {
      id: 3,
      caption: '🇬🇧UNITED KINGDOM',
      imageUrl: images.UK,
    },
    {
      id: 4,
      caption: '🇫🇷FRANCE',
      imageUrl: images.FRANCE,
    },
    {
      id: 5,
      caption: '🇧🇪BELGIUM',
      imageUrl: images.BELGIUM,
    },
    {
      id: 6,
      caption: '🇪🇸SPAIN',
      imageUrl: images.SPAIN,
    },
    {
      id: 7,
      caption: '🇷🇴ROMANIA',
      imageUrl: images.ROMANIA,
    },
    {
      id: 8,
      caption: '🇵🇱POLAND',
      imageUrl: images.POLAND,
    },
    {
      id: 9,
      caption: '🇸🇪SWEDEN',
      imageUrl: images.SWEDEN,
    },
    {
      id: 10,
      caption: '🇲🇽MEXICO',
      imageUrl: images.MEXICO,
    },
    {
      id: 11,
      caption: '🇧🇷BRAZIL',
      imageUrl: images.BRAZIL,
    },
    {
      id: 12,
      caption: '🇮🇹ITALY',
      imageUrl: images.ITALY,
    },
    {
      id: 13,
      caption: '🇦🇷ARGENTINA',
      imageUrl: images.ARGENTINA,
    },
  ];

  return (
    <main className={`${styles.places} placesSlider`}>
      <Slider className={`${styles.slider}  `} {...slideSettings}>
        {places.map(({ id, caption, imageUrl }) => (
          <figure key={id}>
            <Image src={imageUrl} alt='' />
            <figcaption>
              <h4>{caption}</h4>
            </figcaption>
          </figure>
        ))}
      </Slider>
    </main>
  );
}

export default Places;
