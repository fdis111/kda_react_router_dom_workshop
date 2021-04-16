import styles from  '../style/Navbar.module.css';

export default function Navigation() {
    return (
        <div className={styles.navigation}>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </div>
    )
}
