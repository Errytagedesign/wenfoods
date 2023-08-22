import React from 'react';
import { hotOffersData } from '@/Components/HotOffers/HotOfferData';
import styles from './SingleProduct.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { BsPatchCheckFill } from 'react-icons/bs';

export default function SingleProduct({ params }) {
  const id = parseFloat(params.id);

  let product = {};

  hotOffersData.forEach((el) => {
    if (id === el.id) {
      product = el;
    }
  });

  return (
    <main
      className={`${styles.product} d-flex flex-column justify-content-between`}
    >
      <section
        className={`${styles.productContainer} d-flex flex-column flex-lg-row  justify-content-between`}
      >
        <figure className={` col-12 col-lg-4`}>
          {' '}
          <Image
            src={product.imageUrl.src}
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: 'auto' }}
            alt={product.alt}
          />{' '}
        </figure>
        <aside className='col-12 col-lg-6'>
          <h3>{product.title} </h3>
          <h2> ₦ {product.price} </h2>

          <h5 className='mt-3'>
            {' '}
            <BsPatchCheckFill /> In stock
          </h5>

          <div className='d-flex flex-column col-12 col-md-8'>
            <Link
              className='main-btn mb-2 mt-4'
              href='https://wa.me/+2348177001544'
            >
              Chat us to Order Now!
            </Link>

            <Link href='/contact' className='grey-btn'>
              Contach us
            </Link>
          </div>
        </aside>
      </section>

      <hr />
      <section className={`${styles.productDeets} `}>
        <h4> Product Descriptions</h4>
        <p dangerouslySetInnerHTML={{ __html: product.subtitle }} />
      </section>
    </main>
  );
}
