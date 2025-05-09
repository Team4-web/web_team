'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import styles from './collaborations.module.css';

export default function Collaborations() {
  const [showModal, setShowModal] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);
  
  const collaborations = [
    {
      id: 1,
      image: "/images/images/collab1.jpg",
      productsCount: 12
    },
    {
      id: 2,
      image: "/images/images/collab2.jpg",
      productsCount: 8
    },
    {
      id: 3,
      image: "/images/images/collab3.jpg",
      productsCount: 15
    },
    {
      id: 4,
      image: "/images/images/collab4.jpg",
      productsCount: 10
    }
  ];

  const handleArtistClick = (artistId) => {
    setSelectedArtist(artistId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedArtist(null);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      
      <main className={styles.mainContent}>
        
        <h1 className={styles.collaborationsTitle}>COLLABORATIONS</h1>
        
        <section className={styles.collaborationsGrid}>
          {collaborations.map((collab) => (
            <div key={collab.id} className={styles.collaborationItem}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={collab.image} 
                  alt={`Collaboration ${collab.id}`} 
                  className={styles.collabMainImg}
                  width={500}
                  height={350}
                  layout="responsive"
                />
              </div>
              <button 
                className={styles.artistBtn}
                onClick={() => handleArtistClick(collab.id)}
              >
                Meet the Artist
              </button>
              <p className={styles.productsCount}>{collab.productsCount} products</p>
            </div>
          ))}
        </section>
        
        <div className={styles.pagination}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((pageNum) => (
            <Link 
              href={`/collaborations?page=${pageNum}`}
              key={pageNum} 
              className={`${styles.pageNumber} ${pageNum === 1 ? styles.active : ''}`}
            >
              {pageNum}
            </Link>
          ))}
          <Link href="/collaborations?page=2" className={styles.pageNumber}>
            &gt;&gt;
          </Link>
        </div>
        
        {showModal && (
          <ArtistModal 
            artistId={selectedArtist} 
            onClose={closeModal} 
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
}

function CollaborationsPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);
  
  // The collaborations data would typically come from an API or data file
  const collaborations = [
    // Your collaborations data would go here
  ];

  useEffect(() => {
    // Load cart from localStorage when component mounts
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  // Calculate total cart count
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  function renderArtistModal() {
    if (!selectedArtist) return null;
    
    const collaboration = collaborations.find(c => c.id === selectedArtist);
    if (!collaboration) return null;
    
    return (
      <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={() => setIsModalOpen(false)}>×</button>
          <div className="modal-body">
            <h2 className="modal-title">{collaboration.artist}'s Works</h2>
            <div className="products-grid">
              {collaboration.products.map(product => (
                <div 
                  key={product.id} 
                  className="product-card"
                  onClick={() => router.push(`/painting/${product.id}`)}
                >
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    className="product-img"
                    width={300} 
                    height={200}
                    layout="responsive"
                  />
                  <div className="product-name">{product.name}</div>
                  <div className="product-price">${product.price.toFixed(2)}</div>
                  <button 
                    className="add-to-cart-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product.id);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  function addToCart(productId) {
    const product = getAllProducts().find(p => p.id === productId);
    if (!product) return;

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId);
      let newItems;
      
      if (existingItem) {
        newItems = prevItems.map(item => 
          item.id === productId 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        newItems = [...prevItems, {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: 1
        }];
      }
      
      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(newItems));
      return newItems;
    });
    
    alert('Item added to cart!');
  }

  // Get all products from all collaborations
  function getAllProducts() {
    return collaborations.flatMap(collab => 
      collab.products.map(product => ({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price
      }))
    );
  }

  return (
    <div className="collaborations-container">
      <header>
        <nav>
          {/* Your navigation here */}
          <div className="cart-icon">
            <Link href="/cart">
              <span className="material-icons">shopping_cart</span>
              {cartCount > 0 && (
                <span className="cart-count">{cartCount}</span>
              )}
            </Link>
          </div>
        </nav>
      </header>

      <div className="collaborations-grid">
        {collaborations.map((collab, index) => (
          <div 
            key={collab.id} 
            className="collaboration-item" 
            data-id={collab.id}
          >
            <div 
              className="collab-image-container"
              onClick={() => {
                setSelectedArtist(collab.id);
                setIsModalOpen(true);
              }}
            >
              <Image 
                src={collab.image} 
                alt={collab.artist}
                className="collab-main-img"
                width={400}
                height={300}
                layout="responsive"
              />
            </div>
            <h3>{collab.artist}</h3>
            <button 
              className="artist-btn"
              onClick={() => {
                setSelectedArtist(collab.id);
                setIsModalOpen(true);
              }}
            >
              View Collection
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && renderArtistModal()}
    </div>
  );
}