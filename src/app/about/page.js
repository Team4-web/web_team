import styles from './styles.module.css';

export const metadata = {
	title: 'About page',
	description: 'Tis page is about my website',
	keyword: '',
	author: '',
}

export default function about() {
  return (

	<div className={styles.container}>
      <h1 className={styles.title}>Welcome</h1>
    </div>
  );
}

