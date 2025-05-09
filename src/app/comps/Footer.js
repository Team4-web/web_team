import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>ABOUT</h4>
          <Link href="#">About Us</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">Privacy Policy</Link>
        </div>
        
        <div className={styles.footerSection}>
          <h4>FOLLOW US</h4>
          <div className={styles.socialIcons}>
            <Image 
              src="images/paintings/square-facebook-brands.svg" 
              alt="facebook" 
              width={24} 
              height={24} 
              className={styles.socialIcon} 
            />
            <Image 
              src="images/paintings/instagram-brands.svg" 
              alt="instagram" 
              width={24} 
              height={24} 
              className={styles.socialIcon} 
            />
            <Image 
              src="images/paintings/square-twitter-brands.svg" 
              alt="twitter" 
              width={24} 
              height={24} 
              className={styles.socialIcon} 
            />
          </div>
          <Link href="#">Feedback</Link>
          <div className={styles.rating}>★★★★★</div>
        </div>
        
        <div className={styles.footerSection}>
          <div className={styles.footerLogo}>Art Gallery</div>
          <div className={styles.location}>
            <p>
              IKH SURGUULIIN GUDAMJ-1<br />
              P.O.BOX -46A/523, 14201<br />
              ULAANBAATAR, MONGOLIA
            </p>
          </div>
        </div>
        
        <div className={styles.footerSection}>
          <h4>PAYMENT METHODS</h4>
          <div className={styles.paymentMethods}>
            <Image 
              src="images/paintings/cc-visa-brands.svg" 
              alt="visa" 
              width={36} 
              height={36} 
              className={styles.paymentIcon} 
            />
            <Image 
              src="images/paintings/cc-mastercard-brands.svg" 
              alt="mastercard" 
              width={36} 
              height={36} 
              className={styles.paymentIcon} 
            />
            <Image 
              src="images/paintings/cc-paypal-brands.svg" 
              alt="paypal" 
              width={36} 
              height={36} 
              className={styles.paymentIcon} 
            />
          </div>
        </div>
      </div>
      
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Art Gallery. All rights reserved.</p>
      </div>
    </footer>
  );
}