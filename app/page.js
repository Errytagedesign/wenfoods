import Reviews from '@/Components/reviews/Reviews';
import styles from './page.module.scss';
import HeroSection from '@/Components/HeroSection/HeroSection';
import HotOffers from '@/Components/HotOffers/HotOffers';
import ChatUs from '@/Components/chat/ChatUs';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <section className={`${styles.whyUs} pt-5 `}>
        <section className='container d-flex flex-column justify-content-between mt-5'>
          <article data-aos='zoom-out' className=''>
            <p>
              {' '}
              Elevate your culinary creations with the exceptional taste of 507
              Gold Basmati Rice, renowned for its aromatic fragrance and
              culinary excellence, and experience a fusion of tradition and
              taste with Duru Bulgur Basmati Rice, where the wholesome goodness
              of bulgur meets the fragrant allure of Basmati rice, adding health
              benefits and exquisite flavor to your recipes.
            </p>
          </article>
          <aside className='mt-5'>
            <h4 data-aos='fade-in'> Wy Basmati Rice</h4>
            <div className='line'></div>
            <ul className=''>
              <li data-aos='fade-down' className=''>
                <span>Low Glycemic Index:</span> <br />
                Basmati rice has a lower glycemic index compared to other types
                of rice. This means it causes a slower and more gradual rise in
                blood sugar levels, which can be beneficial for managing
                diabetes and maintaining steady energy levels.
              </li>

              <li data-aos='fade-down' className=''>
                <span>Rich in Nutrients:</span> <br />
                Basmati rice retains more of its natural nutrients due to the
                unique processing it undergoes. It&apos;s a good source of
                essential minerals like magnesium and potassium, contributing to
                heart health, muscle function, and overall well-being.
              </li>

              <li data-aos='fade-down' className=''>
                <span>High in Fiber:</span> <br />
                Whole-grain Basmati rice varieties are rich in dietary fiber,
                aiding digestion and promoting a feeling of fullness. The fiber
                content supports a healthy gut and can assist in weight
                management.
              </li>

              <li data-aos='fade-down' className=''>
                <span>Gluten-Free Option: </span> <br />
                Basmati rice is naturally gluten-free, making it an excellent
                choice for individuals with gluten sensitivities or celiac
                disease. It allows for versatile meal planning without
                compromising dietary needs.
              </li>
              <li data-aos='fade-down' className=''>
                <span>Potential Antioxidant:</span> <br />
                Some studies suggest that Basmati rice, particularly brown
                Basmati rice, may contain antioxidants that help protect cells
                from oxidative stress.
              </li>
            </ul>
          </aside>
        </section>
      </section>

      <section data-aos='zoom-in' className={styles.hotOffers}>
        <section data-aos='fade-up' className='text-center section-title'>
          <h3> Hot Offers </h3>
          <div className='line'></div>
        </section>
        <HotOffers />
      </section>

      <section
        data-aos='zoom-in'
        className={`${styles.reviewsContainer} container`}
      >
        <section data-aos='fade-up' className='text-center section-title'>
          <h3> What our satisfied client says </h3>
          <div className='line'></div>
        </section>
        <Reviews />
      </section>

      <aside className={styles.Chat}>
        <ChatUs />
      </aside>

      <section className={styles.fix}></section>
    </main>
  );
}
