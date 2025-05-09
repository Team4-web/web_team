import React from 'react';
import Link from 'next/link';
import Home from "../comps/Home";
import styles from './categories.module.css';

export default function Categories() {
  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <div className={styles.filterSection}>
        <Link href="/" className={styles.BackBtn}>Back</Link>
          <div className={styles.filterColumn}>
            <h3>By Size</h3>
            <ul>
              <li><a href="#">small</a></li>
              <li><a href="#">medium</a></li>
              <li><a href="#">large</a></li>
            </ul>
          </div>
          
          <div className={styles.filterColumn}>
            <h3>By Medium</h3>
            <ul>
              <li><a href="#">acrylic</a></li>
              <li><a href="#">oil</a></li>
              <li><a href="#">watercolor</a></li>
              <li><a href="#">stretching & drawing</a></li>
              <li><a href="#">gouache</a></li>
              <li><a href="#">pigment</a></li>
              <li><a href="#">pastel</a></li>
              <li><a href="#">others</a></li>
            </ul>
          </div>
          
          <div className={styles.filterColumn}>
            <h3>By Color</h3>
            <ul>
              <li><a href="#">cool-toned</a></li>
              <li><a href="#">warm-toned</a></li>
              <li><a href="#">neutral</a></li>
              <li><a href="#">black & white</a></li>
            </ul>
          </div>
          
          <div className={styles.filterColumn}>
            <h3>Material</h3>
            <ul>
              <li><a href="#">canvas</a></li>
              <li><a href="#">thin paper</a></li>
              <li><a href="#">thick paper</a></li>
              <li><a href="#">fabric</a></li>
              <li><a href="#">leather</a></li>
              <li><a href="#">tracing paper</a></li>
              <li><a href="#">others</a></li>
            </ul>
          </div>
          
          <div className={styles.filterColumn}>
            <h3>Utterance</h3>
            <ul>
              <li><a href="#">historical</a></li>
              <li><a href="#">cultural</a></li>
              <li><a href="#">abstract</a></li>
              <li><a href="#">genre</a></li>
              <li><a href="#">landscape</a></li>
              <li><a href="#">mythical</a></li>
              <li><a href="#">religious</a></li>
              <li><a href="#">portrait</a></li>
              <li><a href="#">still life</a></li>
            </ul>
          </div>
        </div>
      </header>
      
      <main>
        <Home />
      </main>
    </div>
  );
}