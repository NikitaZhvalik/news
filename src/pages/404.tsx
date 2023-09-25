import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 4000)
    }, [])

    return (
        <div>
            <p>Ой...</p>
            <h1>Такой страницы нет</h1>
            <p>Перейти на <Link href="/">главную страницу</Link></p>
        </div>
    );
}
 
export default NotFound;