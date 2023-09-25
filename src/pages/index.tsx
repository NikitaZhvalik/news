import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getNews } from "../toolkitRedux/newsReducer";
import { setQuery } from "../toolkitRedux/queryReducer";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React from "react";
import FilterNewest from "@/common/filterNewest";
import FilterItemsOnPages from "@/common/filterItemsOnPages";
import Link from "next/link";
import { AnyAction } from "redux";

const inter = Inter({ subsets: ["latin"] });

interface NewsItem {
  id: string;
  webPublicationDate: string;
  webTitle: string;
  pillarName: string;
}

export default function Home() {
  const key = "61667a39-a309-4fcf-bd7a-8f503bf6d796";
  const dispatch = useDispatch();
  const query = useSelector(
    (state: { query: { query: string } }) => state.query.query
  );
  const itemOnPage = useSelector(
    (state: { itemsOnPages: { filterItemsOnPage: string } }) =>
      state.itemsOnPages.filterItemsOnPage
  );
  const newest = useSelector(
    (state: { newest: { filterNewest: string } }) => state.newest.filterNewest
  );
  const news = useSelector(
    (state: { news: { news: NewsItem[] } }) => state.news.news
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch<AnyAction>(getNews({ query, itemOnPage, newest }));
  }

  return (
    <div className="content">
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
          <div>
            <FilterNewest />
            <FilterItemsOnPages />
          </div>
        </form>
      </div>
      <main className={styles.main}>
        <h2 className={styles.subtitle}>All news</h2>
        <ul className={styles.articles}>
          {news?.map((newsItem: NewsItem) => {
            const date = newsItem.webPublicationDate;
            const formattedDate = format(
              new Date(date),
              "dd MMM yyyy, hh:mm:ss a"
            );

            return (
              <Link href={`/`} key={newsItem.id}>
                <li className={styles.article}>
                  <p className={styles.date}>{formattedDate}</p>
                  <h3 className={styles.headline}>{newsItem.webTitle}</h3>
                  <p className={styles.categories}>{newsItem.pillarName}</p>
                  <button className={styles.details}>details</button>
                </li>
              </Link>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
