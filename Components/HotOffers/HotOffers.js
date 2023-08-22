import React from 'react';
import styles from './HotOffers.module.scss';
import { hotOffersData } from './HotOfferData';
import Image from 'next/image';
import Link from 'next/link';
import { BsStarFill } from 'react-icons/bs';

function HotOffers() {
  return (
    <main className={`${styles.OffersContainer} my-5 container frontCard  `}>
      {hotOffersData.map(({ id, title, price, imageUrl, alt }) => (
        <article
          className={`${styles.Offers} card mt-5 d-flex flex-column justify-content-center align-items-center`}
          key={id}
        >
          <figure className=''>
            <Image src={imageUrl} alt={alt} />
          </figure>
          <div className='text-center'>
            <h4 className=''>{title} </h4>
            <h3> ₦{price} </h3>
          </div>
          <div className={styles.stars}>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </div>
          <button className='main-btn my-3 col-12'>
            {' '}
            <Link href={`${id}`}> Buy Now </Link>{' '}
          </button>
        </article>
      ))}
    </main>
  );
}

export default HotOffers;
