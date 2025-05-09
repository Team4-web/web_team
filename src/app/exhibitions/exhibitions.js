'use client';

import { useEffect } from 'react';
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import styles from './exhibition.module.css';

export default function Exhibition() {
  useEffect(() => {

    const exhibitions = {
      1: {
        title: "Modern Masters",
        image: "/images/images/exhibition1.jpg",
        date: "June 15 - August 30, 2023",
        location: "National Art Museum",
        artworks: "45 artworks",
        description: "This exhibition showcases the finest works from the Modern Masters collection, featuring pieces from renowned artists around the world. The collection includes paintings, sculptures, and mixed media works that represent the Modernist movement."
      },
      2: {
        title: "Abstract Visions",
        image: "/images/images/exhibition2.jpg",
        date: "July 1 - September 15, 2023",
        location: "Contemporary Art Center",
        artworks: "32 artworks",
        description: "Explore the world of abstract art through this stunning collection that challenges perceptions and invites new interpretations. Featuring works from both established and emerging abstract artists."
      },
      3: {
        title: "Renaissance Revisited",
        image: "/images/images/exhibition3.jpg",
        date: "August 10 - October 25, 2023",
        location: "City Art Gallery",
        artworks: "28 artworks",
        description: "A modern take on Renaissance art, featuring contemporary artists who draw inspiration from this pivotal period in art history. The exhibition includes both homages and critical reinterpretations."
      },
      4: {
        title: "Eastern Perspectives",
        image: "/images/images/exhibition4.jpg",
        date: "September 5 - November 20, 2023",
        location: "Asian Art Museum",
        artworks: "38 artworks",
        description: "This exhibition presents a diverse range of artworks from across Asia, showcasing traditional techniques alongside modern interpretations of Eastern artistic traditions."
      },
      5: {
        title: "Surreal Encounters",
        image: "/images/images/exhibition5.jpg",
        date: "October 1 - December 15, 2023",
        location: "Modern Art Institute",
        artworks: "24 artworks",
        description: "Step into the world of the surreal with this mind-bending exhibition that explores the subconscious through painting, sculpture, and digital media."
      },
      6: {
        title: "Minimalist Expressions",
        image: "/images/images/exhibition6.jpg",
        date: "November 10, 2023 - January 25, 2024",
        location: "Design Art Space",
        artworks: "18 artworks",
        description: "Less is more in this carefully curated exhibition that explores the power of minimalism in contemporary art. Featuring works that use simplicity to convey complex ideas."
      },
      7: {
        title: "Impressionist Light",
        image: "/images/images/exhibition7.jpeg",
        date: "December 5, 2023 - February 20, 2024",
        location: "Luminance Gallery",
        artworks: "30 artworks",
        description: "Celebrating the play of light in impressionist works, this exhibition brings together masterpieces that capture fleeting moments and atmospheric effects."
      },
      8: {
        title: "Digital Frontiers",
        image: "/images/images/exhibition8.jpeg",
        date: "January 15 - March 30, 2024",
        location: "New Media Center",
        artworks: "22 interactive installations",
        description: "Exploring the intersection of art and technology, this exhibition features cutting-edge digital works that respond to viewer interaction."
      }
    };

    // Show exhibition modal
    function showExhibitionModal(exhibitionId) {
      const exhibition = exhibitions[exhibitionId];
      
      if (!exhibition) return;
      
      document.getElementById('modalImage').src = exhibition.image;
      document.getElementById('modalImage').alt = exhibition.title;
      document.getElementById('modalTitle').textContent = exhibition.title;
      document.getElementById('modalDate').textContent = exhibition.date;
      document.getElementById('modalLocation').textContent = exhibition.location;
      document.getElementById('modalArtworks').textContent = exhibition.artworks;
      document.getElementById('modalDescription').textContent = exhibition.description;
      
      document.getElementById('exhibitionModal').style.display = 'block';
      document.body.style.overflow = 'hidden';
    }

    // Close modal
    function closeModal() {
      document.getElementById('exhibitionModal').style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    // Add event listeners
    const sliderItems = document.querySelectorAll('.slider .item');
    sliderItems.forEach(item => {
      item.addEventListener('click', function() {
        const exhibitionId = this.getAttribute('data-exhibition');
        showExhibitionModal(exhibitionId);
      });
    });

    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }
    
    const backButton = document.querySelector('.back-to-main');
    if (backButton) {
      backButton.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
      if (event.target == document.getElementById('exhibitionModal')) {
        closeModal();
      }
    };

    // Pause animation on hover
    const slider = document.querySelector('.slider');
    if (slider) {
      slider.addEventListener('mouseenter', function() {
        this.style.animationPlayState = 'paused';
      });
      
      slider.addEventListener('mouseleave', function() {
        this.style.animationPlayState = 'running';
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      
      <main className={styles.mainContent}>
        <section className={styles.exhibitionsSection}>
        <h1 data-content="FEATURED EXHIBITIONS">
                FEATURED EXHIBITIONS
              </h1>
          
          
          <div className={styles.banner}>
            <div className={styles.slider} style={{"--quantity": "8"}}>
              <div className={styles.item} style={{"--position": "1"}} data-exhibition="1">
                <img src="/images/images/exhibition1.jpg" alt="Modern Masters" />
              </div>
              <div className={styles.item} style={{"--position": "2"}} data-exhibition="2">
                <img src="/images/images/exhibition2.jpg" alt="Abstract Visions" />
              </div>
              <div className={styles.item} style={{"--position": "3"}} data-exhibition="3">
                <img src="/images/images/exhibition3.jpg" alt="Renaissance Revisited" />
              </div>
              <div className={styles.item} style={{"--position": "4"}} data-exhibition="4">
                <img src="/images/images/exhibition4.jpg" alt="Eastern Perspectives" />
              </div>
              <div className={styles.item} style={{"--position": "5"}} data-exhibition="5">
                <img src="/images/images/exhibition5.jpg" alt="Surreal Encounters" />
              </div>
              <div className={styles.item} style={{"--position": "6"}} data-exhibition="6">
                <img src="/images/images/exhibition6.jpg" alt="Minimalist Expressions" />
              </div>
              <div className={styles.item} style={{"--position": "7"}} data-exhibition="7">
                <img src="/images/images/exhibition7.jpeg" alt="Impressionist Light" />
              </div>
              <div className={styles.item} style={{"--position": "8"}} data-exhibition="8">
                <img src="/images/images/exhibition8.jpeg" alt="Digital Frontiers" />
              </div>
            </div>
            <div className={styles.content}>
            <h1>EXHIBITIONS</h1>
            </div>
          </div>
        </section>
        
        <div id="exhibitionModal" className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.closeBtn}>&times;</span>
            <div className={styles.modalBody}>
              <img id="modalImage" src="" alt="Exhibition" />
              <div className={styles.modalInfo}>
                <h2 id="modalTitle"></h2>
                <p id="modalDate"></p>
                <p id="modalLocation"></p>
                <p id="modalArtworks"></p>
                <div className={styles.modalDescription} id="modalDescription"></div>
                <button className={styles.backToMain}>Back to Exhibitions</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}