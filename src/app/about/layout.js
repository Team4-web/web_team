import styles from './styles.module.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.myBodyColor} >
        {children}
      </body>
    </html>
  );
}
