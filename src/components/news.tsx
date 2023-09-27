import Link from "next/link";
import { format } from "date-fns";
import { useSelector } from "react-redux";

import styles from "../styles/News.module.css";

interface NewsItem {
	id: string
	webPublicationDate: string
	webTitle: string
	pillarName: string
}

const News = () => {
	const news = useSelector(
		(state: { news: { news: NewsItem[] } }) => state.news.news
	)

	return (
		<main className={styles.main}>
			<h2 className={styles.subtitle}>All news</h2>
			<ul className={styles.articles}>
				{news?.length === 0 ? <h2 className={styles.cantFind}>I couldn't find news for this request</h2> : ''}
				{news?.map((newsItem: NewsItem, index :number) => {
					const date = newsItem.webPublicationDate
					const formattedDate = format(new Date(date), "dd MMM yyyy, hh:mm:ss a")
					const uri = encodeURIComponent(newsItem.id)

					return (
						<Link href={`/news/${uri}`} key={index}>
							<li className={styles.article}>
							<p className={styles.date}>{formattedDate}</p>
							<h3 className={styles.headline}>{newsItem.webTitle}</h3>
							<p className={styles.categories}>{newsItem.pillarName}</p>
							<button className={styles.details}>details</button>
							</li>
						</Link>
					)
				})}
			</ul>
		</main>
	)
}

export default News;