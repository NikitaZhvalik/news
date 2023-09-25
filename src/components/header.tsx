import Image from "next/image";
import styles from "../styles/Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <Image src="/logo.png" alt="logo" width={60} height={60}/>
            </div>
        </header>
    );
}
 
export default Header;