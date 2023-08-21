import React from 'react';
import styles from './HotOffers.module.scss';
import { hotOffersData } from './HotOfferData';
import Image from 'next/image';
import Link from 'next/link';

function HotOffers() {
  return (
    <main
      className={`${styles.OffersContainer} my-5 d-flex flex-wrap container justify-content-between`}
    >
      {hotOffersData.map(({ id, title, subtitle, imageUrl, alt, url }) => (
        <article
          className={`${styles.Offers} card mt-5 d-flex flex-column justify-content-center align-items-center`}
          key={id}
        >
          <figure className='card-image'>
            <Image src={imageUrl} alt={alt} />
          </figure>
          <div className='card-body'>
            <h4 className='card-title'>{title} </h4>
            <p className='card-text'>{subtitle.slice(0, 100)}... </p>
          </div>

          <div className='col-12'>
            <button className='main-btn my-3 col-12'>
              {' '}
              <Link href={url}> Buy Now </Link>{' '}
            </button>
          </div>
        </article>
      ))}
    </main>
  );
}

export default HotOffers;
