import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.categories}>
        <div className={styles.categoryList}>
          <div className={styles.category}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/paintings/cultural.jpg"
                alt="Cultural"
                width={250}
                height={250}
                className={styles.categoryImage}
              />
            </div>
            <p>Cultural</p>
          </div>
          <div className={styles.category}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/paintings/landscapes.jpg"
                alt="Landscapes"
                width={250}
                height={250}
                className={styles.categoryImage}
              />
            </div>
            <p>Landscapes</p>
          </div>
          <div className={styles.category}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/paintings/mythical.jpg"
                alt="Mythical"
                width={250}
                height={250}
                className={styles.categoryImage}
              />
            </div>
            <p>Mythical</p>
          </div>
          <div className={styles.category}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/paintings/religion.jpg"
                alt="Religion"
                width={250}
                height={250}
                className={styles.categoryImage}
              />
            </div>
            <p>Religion</p>
          </div>
        </div>
      </section>
      
      <section className={styles.artists}>
        <p>ARTIST GAVROCHE, ARTIST GAVROCHE, ARTIST GAVROCHE, ARTIST GAVROCHE, TSOLMONBAYAR, YDAMSUREN, ALIMAA, DORJSUKH, NANDINBILEG...</p>
      </section>
      
      <section className={styles.collaboration}>
        <h2>COLLABORATION</h2>
        <div className={styles.collabList}>
          <div className={styles.collabImage}>
            <Image src="/images/paintings/collab1.jpg" alt="Collaboration 1" width={300} height={200} />
          </div>
          <div className={styles.collabImage}>
            <Image src="/images/paintings/collab2.png" alt="Collaboration 2" width={300} height={200} />
          </div>
          <div className={styles.collabImage}>
            <Image src="/images/paintings/collab3.jpg" alt="Collaboration 3" width={300} height={200} />
          </div>
          <div className={styles.collabImage}>
            <Image src="/images/paintings/collab4.jpg" alt="Collaboration 4" width={300} height={200} />
          </div>
        </div>
      </section>
    </div>
  );
}