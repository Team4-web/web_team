'use client';
import Link from 'next/link';
import { FaUser, FaShoppingCart, FaGlobe } from 'react-icons/fa';
import { FaHeart as FaHeartRegular } from 'react-icons/fa6';
import styles from './Navbar.module.css';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent triggering the document click event
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles['header-container']}>
      <div className={styles['top-bar']}>
        {/* Hamburger Menu - Now on the left */}
        <div className={styles['hamburger-container']}>
          <button 
            className={styles.hamburger} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            &#9776;
          </button>
        </div>

        {/* Search and Language - Visible on desktop, hidden on mobile */}
        <div className={`${styles['header-left']} ${styles['desktop-only']}`}>
          <div className={styles['search-container']}>
            <input type="text" placeholder="Search" />
          </div>
          <button className={styles['icon-btn']}>
            <FaGlobe />
          </button>
        </div>

        {/* Logo - Center */}
        <div className={styles.logo}>
          <Link href="/" className={styles['logo-placeholder']}>Art Gallery</Link>
        </div>

        {/* User, Wishlist, Cart - Right */}
        <div className={styles['header-right']}>
          <button className={styles['user-btn']}><FaUser /></button>
          <button className={styles['wishlist-btn']}><FaHeartRegular /></button>
          <Link href="/cart" className={styles['cart-btn']}>
            <FaShoppingCart />
            <span className={styles['cart-count']}>0</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles['mobile-menu']} ${isMenuOpen ? styles.open : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className={styles['mobile-search-container']}>
          <input type="text" placeholder="Search" />
        </div>
        <button className={styles['mobile-language-btn']}>
          <FaGlobe /> <span>Change Language</span>
        </button>
        <nav className={styles['mobile-nav']}>
          <Link href="/categories" className={styles['mobile-nav-item']}>CATEGORIES</Link>
          <Link href="/exhibitions" className={styles['mobile-nav-item']}>EXHIBITIONS</Link>
          <Link href="/collaborations" className={styles['mobile-nav-item']}>COLLABORATIONS</Link>
          <Link href="/essential" className={styles['mobile-nav-item']}>ESSENTIAL</Link>
          <Link href="/new" className={styles['mobile-nav-item']}>NEW</Link>
        </nav>
      </div>

      {/* Desktop Navigation */}
      <nav className={styles['bottom-line']}>
        <div className={styles['category-tabs']}>
          <Link href="/categories" className={styles['category-btn']}>CATEGORIES</Link>
          <Link href="/exhibitions" className={styles['category-btn']}>EXHIBITIONS</Link>
          <Link href="/collaborations" className={styles['category-btn']}>COLLABORATIONS</Link>
          <Link href="/essential" className={styles['category-btn']}>ESSENTIAL</Link>
          <Link href="/new" className={styles['category-btn']}>NEW</Link>
        </div>
      </nav>
    </header>
  );
}