import React from 'react';
import { hotOffersData } from '@/Components/HotOffers/HotOfferData';
import styles from './SingleProduct.module.scss';
import Image from 'next/image';

export default function SingleProduct({ params }) {
  const id = parseFloat(params.id);

  let product = {};

  console.log(hotOffersData);
  hotOffersData.forEach((el) => {
    console.log(el);
    if (id === el.id) {
      product = el;
    }
  });
  console.log(product.imageUrl.src);

  return (
    <main
      className={`${styles.product} d-flex flex-column flex-lg-row mt-5 justify-content-between`}
    >
      <figure className='col-12 col-lg-4'>
        {' '}
        <Image
          className={styles.productImage}
          src={product.imageUrl.src}
          width={100}
          height={100}
          alt={product.alt}
        />{' '}
      </figure>
      <section className='col-12 col-lg-6'>
        <h3>{product.title} </h3>
        <h2> {product.price} </h2>
        <p dangerouslySetInnerHTML={{ __html: product.subtitle }} />
      </section>
    </main>
  );
}
