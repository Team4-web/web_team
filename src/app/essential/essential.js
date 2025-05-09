"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './essential.module.css';

export default function EssentialPage() {
  // Sample artwork data - in a real app, you might fetch this from an API
  const artworks = [
    { id: 1, image: "/images/images/essential1.jpg", title: "Decomposition VI" },
    { id: 2, image: "/images/images/essential2.jpg", title: "Urag zurag" },
    { id: 3, image: "/images/images/essential3.jpg", title: "Urag zurag" },
    { id: 4, image: "/images/images/essential4.jpg", title: "Urag zurag" },
    { id: 5, image: "/images/images/essential5.jpg", title: "Urag zurag" },
    { id: 6, image: "/images/images/essential6.jpg", title: "Urag zurag" },
    { id: 7, image: "/images/images/essential7.jpg", title: "Urag zurag" },
    { id: 8, image: "/images/images/essential8.jpg", title: "Urag zurag" },
    { id: 9, image: "/images/images/essential9.jpg", title: "Urag zurag" },
    { id: 10, image: "/images/images/essential10.jpg", title: "Urag zurag" },
    { id: 11, image: "/images/images/essential11.jpg", title: "Urag zurag" },
    { id: 12, image: "/images/images/essential12.jpg", title: "Urag zurag" },
  ];

  // Handle pagination
  const [activePage, setActivePage] = React.useState(1);

  return (
    <>
      
      <main className={styles.mainContent}>
        
        <h1 className={styles.newTitle}>ESSENTIAL</h1>
        
        <section className={styles.newArtworks}>
          {artworks.map((artwork) => (
            <div key={artwork.id} className={styles.artwork} data-artwork={artwork.id}>
              <div className={styles.imageContainer}>
                <Image 
                  src={artwork.image} 
                  alt={artwork.title}
                  width={300}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <h3>{artwork.title}</h3>
            </div>
          ))}
        </section>
        
        <div className={`${styles.pagination} ${styles.bottomPagination}`}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((page) => (
            <button 
              key={page}
              className={`${styles.pageBtn} ${activePage === page ? styles.active : ''}`}
              onClick={() => setActivePage(page)}
            >
              {page}
            </button>
          ))}
          <button className={styles.pageBtn}>{'>'}</button>
          <button className={styles.pageBtn}>{'>'}</button>
        </div>
      </main>

    </>
  );
}