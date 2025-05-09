'use client'

import React, { useState } from 'react';
import styles from "./artist.module.css";

const ArtistPage = () => {
    // State for product filtering
    const [category, setCategory] = useState('Categories ▼');
    const [artist, setArtist] = useState('Artists ▼');
    const [price, setPrice] = useState('Price ▼');
    const [currentPage, setCurrentPage] = useState(1);

    // Mock product data
    const products = Array(10).fill().map((_, index) => ({
        id: index + 1,
        name: "Decomposition",
        price: "100'000₮",
        image: "/paintings/mythical.jpg"
    }));

    // Handle pagination
    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Here you would implement fetching data for the specific page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Generate pagination links
    const generatePaginationLinks = () => {
        const totalPages = 9;
        const links = [];
        
        for (let i = 1; i <= totalPages; i++) {
            links.push(
                <a 
                    key={i} 
                    href="#" 
                    className={currentPage === i ? styles.activePage : ''}
                    onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(i);
                    }}
                >
                    {i}
                </a>
            );
        }
        
        links.push(
            <a 
                key="next" 
                href="#" 
                onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) {
                        handlePageChange(currentPage + 1);
                    }
                }}
            >
                »
            </a>
        );
        
        return links;
    };

    return (
        <div className={styles.container}>
            
            <div className={styles.artistInfo}>
                <h1>ARTIST GAVROCHE</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel placerat mi. 
                    Morbi in ipsum dui. Integer gravida luctus quam non tempor. Phasellus enim purus, 
                    tristique nec mi ac, viverra faucibus ante. In sed elit a nibh tempus gravida. 
                    Curabitur pellentesque, nunc non dapibus malesuada, dui magna sollicitudin ante, 
                    vel pulvinar dui mi ac diam. Integer vel tempus orci. Praesent id magna vulputate, 
                    fringilla libero sit amet, tincidunt velit. Donec id condimentum massa. Vestibulum at aliquet mi.
                </p>
                <button className={styles.btn}>See all products ▼</button>
            </div>

            <div className={styles.categories}>
                <select 
                    className={styles.categorySelect}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option>Categories ▼</option>
                    <option>Paintings</option>
                    <option>Sculptures</option>
                    <option>Prints</option>
                    <option>Photography</option>
                </select>
                
                <select 
                    className={styles.categorySelect}
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                >
                    <option>Artists ▼</option>
                    <option>Gavroche</option>
                    <option>Энүүм</option>
                    <option>Other Artists</option>
                </select>
                
                <select 
                    className={styles.categorySelect}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                >
                    <option>Price ▼</option>
                    <option>Low to High</option>
                    <option>High to Low</option>
                    <option>Under 50'000₮</option>
                    <option>50'000₮ - 200'000₮</option>
                    <option>Above 200'000₮</option>
                </select>
            </div>

            <div className={styles.productGrid}>
                {products.map((product) => (
                    <div key={product.id} className={styles.product}>
                        <img 
                            src={product.image} 
                            alt={product.name}
                        />
                        <p>{product.name} {product.price}</p>
                    </div>
                ))}
            </div>

            <div className={styles.pagination}>
                {generatePaginationLinks()}
            </div>
        </div>
    );
};

export default ArtistPage;