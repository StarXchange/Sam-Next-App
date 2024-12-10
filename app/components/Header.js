import Link from 'next/link';
import styles from './styles/Header.module.css'; //styling for the Header

export default function Header() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">About</Link></li>
                <li><Link href="/">Projects</Link></li>
                <li><Link href="/">Contact</Link></li>
            </ul>
            </nav>
    );

};
    