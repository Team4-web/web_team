'use client';

import React, { useState } from 'react';
import styles from "./product.module.css";

const ProductPage = () => {
    const [mainImage, setMainImage] = useState("/images/zolboo1.png");
    
    const changeImage = (src) => {
        setMainImage(src);
    };
    
    const addToCart = () => {
        alert("Сагсанд нэмэгдлээ!");
    };
    
    const addToFavorites = () => {
        alert("Added to favorites!");
    };

    const productImages = [
        "/images/zolboo1.png",
        "/images/zolboo2.jpg",
        "/images/zolboo3.png",
        "/images/zolboo1.png"
    ];

    const relatedProducts = [
        {
            id: 1,
            image: "/images/zolboo2.jpg",
            name: "Sculpture Name 1",
            price: 80
        },
        {
            id: 2,
            image: "/images/zolboo2.jpg",
            name: "Sculpture Name 2",
            price: 95
        },
        {
            id: 3,
            image: "/images/zolboo2.jpg",
            name: "Sculpture Name 3",
            price: 110
        }
    ];

    return (
        <div className={styles.container}>

            
            <div className={styles.productContainer}>
                <div className={styles.productGallery}>
                    <img 
                        src={mainImage} 
                        alt="Зурагны төрөл" 
                        className={styles.mainImage}
                    />
                    <div className={styles.thumbnails}>
                        {productImages.map((image, index) => (
                            <img 
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => changeImage(image)}
                                className={mainImage === image ? styles.activeThumbnail : ''}
                            />
                        ))}
                    </div>
                </div>
                
                <div className={styles.productDetails}>
                    <h2>Золбоо</h2>
                    <p className={styles.price}>120$</p>
                    <p className={styles.description}>
                        The Winged Victory of Samothrace, a masterpiece of Hellenistic sculpture, is now available as a high-quality white resin replica.
                    </p>

                    <div className={styles.buttons}>
                        <button 
                            className={styles.addToCartBtn}
                            onClick={addToCart}
                        >
                            Add to Cart
                        </button>
                        <button 
                            className={styles.favoriteBtn}
                            onClick={addToFavorites}
                        >
                            ♡
                        </button>
                    </div>

                    <ul className={styles.productInfo}>
                        <li>Хэмжээ: 70 х 70 см</li>
                        <li>Техник: Холимог технологи</li>
                        <li>Материал: Цаас</li>
                        <li>SKU: EN2501</li>
                    </ul>
                    
                    <p className={styles.description}>
                        The Winged Victory of Samothrace, a masterpiece of Hellenistic sculpture, is now available as a high-quality white resin replica.
                    </p>
                </div>
            </div>

            <div className={styles.infoSection}>
                <img 
                    src="/images/enuum.jpg" 
                    alt="С. Энүүм" 
                    className={styles.infoImage}
                />
                <p className={styles.infoText}>
                    <strong>Зураач: С. Энүүм</strong><br />
                    Зураач, урлагийн бүтээлч 
                </p>
            </div>

            <h2 className={styles.relatedTitle}>Related Products</h2>
            <div className={styles.relatedProducts}>
                {relatedProducts.map((product) => (
                    <div key={product.id} className={styles.relatedItem}>
                        <img 
                            src={product.image} 
                            alt={product.name}
                        />
                        <p>{product.name}</p>
                        <p className={styles.price}>${product.price}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ProductPage;