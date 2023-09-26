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
            <h1 className={styles.title}>Ой... такой страницы нет!</h1>
            <Link href="/">
                <button className={styles.btn}>Перейти на главную страницу</button>
            </Link>
        </div>
    )
}
 
export default NotFound;