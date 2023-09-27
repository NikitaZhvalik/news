import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getNews } from "@/toolkitRedux/newsReducer";
import { setQuery } from "@/toolkitRedux/queryReducer";
import { AnyAction } from "redux";
import { setNews } from "@/toolkitRedux/newsReducer";
import axios from "axios";
import News from "@/components/news";
import FilterNewest from "@/common/filterNewest";
import FilterItemsOnPages from "@/common/filterItemsOnPages";
import styles from "@/styles/Home.module.css";

interface NewsItem {
	id: string;
	webPublicationDate: string;
	webTitle: string;
	pillarName: string;
}

export default function Home() {
	const key :string = "61667a39-a309-4fcf-bd7a-8f503bf6d796"
	const dispatch = useDispatch()
	const query = useSelector(
		(state: { query: { query: string } }) => state.query.query
	)
	const itemOnPage = useSelector(
		(state: { itemsOnPages: { filterItemsOnPage: string } }) =>
		state.itemsOnPages.filterItemsOnPage
	)
	const newest = useSelector(
		(state: { newest: { filterNewest: string } }) => state.newest.filterNewest
	)
	const news = useSelector(
		(state: { news: { news: NewsItem[] } }) => state.news.news
	)

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		dispatch<AnyAction>(getNews({ query, itemOnPage, newest }))
	}

	//! scroll
	const [page, setPage] = useState<number>(2)
	const [fetching, setFetching] = useState<boolean>(true)

	useEffect(() => {
		if (fetching) {
			axios.get(`https://content.guardianapis.com/search?q=${query}&api-key=${key}&page=${page}&page-size=${itemOnPage}&order-by=${newest}`)
			.then((res) => {
				dispatch(setNews([...news, ...res.data.response.results]))
				setPage((prev) => prev + 1)
			})
			.finally(() => setFetching(false))
		}
	}, [fetching])

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler)

		return function cleanup() {
			document.removeEventListener("scroll", scrollHandler)
		}
	}, [])


	const scrollHandler = (e: any) => { // todo переделать на TS
		if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 300) {
			setFetching(true)
		}
	}
	//! scroll

	return (
		<div>
			<div className={styles.search}>
				<h1 className={styles.title}>News</h1>
				<form className={styles.form} onSubmit={handleSubmit} method="GET">
					<div>
						<input
						className={styles.input}
						onChange={(e) => dispatch(setQuery(e.target.value))}
						placeholder="Find news..."
						required
						type="text"
						/>
						<button className={styles.btn}>Find</button>
					</div>
					<div className={styles.filters}>
						<FilterNewest />
						<FilterItemsOnPages />
					</div>
				</form>
			</div>
			< News />
		</div>
	)
}
