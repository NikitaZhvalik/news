import Link from "next/link";
import React from "react";
import styles from "@/styles/NewsId.module.css"

type NewsDetailsProps = {
	data: {
		webTitle?: string;
		webPublicationDate?: string;
		webUrl?: string;
		fields?: {
			standfirst?: string;
			trailText?: string;
			byline?: string;
			main?: string;
			body?: string;
		}
	}
}

const key: string = "61667a39-a309-4fcf-bd7a-8f503bf6d796";

export const getServerSideProps = (async (context: { params: { id: string } }) => {

	const {id} = context.params
	const res = await fetch(`https://content.guardianapis.com/${decodeURIComponent(id)}?api-key=${key}&show-fields=all&show-elements=all`)
	const repo = await res.json()
	const data = repo.response.content
	return { props: {data} }
})

const NewsDetails: React.FC<NewsDetailsProps> = ({data} :NewsDetailsProps) => {
    const date = data?.webPublicationDate
    const formattedDate = new Date(date!).toLocaleString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
    })
    
    return (
        <React.Fragment>
            <div className={styles.container}>
				<h1 className={styles.heading}>{data?.webTitle}</h1>
				<div className={styles.subtitleBox}>
					<p className={styles.date}>{formattedDate}</p>
					{data?.webUrl && (
						<Link href={data.webUrl}>
							<p className={styles.guardianLink}>Read on Guardian</p>
						</Link>
					)}
				</div>
				{data?.fields?.standfirst && <div className={styles.paragraph} dangerouslySetInnerHTML={{ __html: data.fields.standfirst }} />}
				{data?.fields?.byline && <div className={styles.paragraph} dangerouslySetInnerHTML={{ __html: data.fields.byline }} />}
				{data?.fields?.main && <div className={styles.paragraph} dangerouslySetInnerHTML={{ __html: data.fields.main }} />}
				{data?.fields?.body && <div className={styles.paragraph} dangerouslySetInnerHTML={{ __html: data.fields.body }} />}
				<Link href="/">
					<button className={styles.btn}>Go back to the main page</button>
				</Link>
            </div>
        </React.Fragment>
    )
}

export default NewsDetails;
