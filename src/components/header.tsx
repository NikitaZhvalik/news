import Image from "next/image";
import styles from "../styles/Header.module.css";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={60} height={60}/>
            </Link>
        </header>
    )
}
 
export default Header;