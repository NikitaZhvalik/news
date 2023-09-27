import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "@/styles/404.module.css";

const NotFound = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 4000)
    }, [])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Oops... there is no such page!</h1>
            <Link href="/">
                <button className={styles.btn}>Go back to the main page</button>
            </Link>
        </div>
    )
}
 
export default NotFound;