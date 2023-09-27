import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItemsOnPage } from "@/toolkitRedux/filterItemsOnPagesReducer";
import styles from "@/styles/FilterItemsOnPages.module.css";

interface RootState {
	itemsOnPages: {
		filterItemsOnPage: string
	}
}

const FilterItemsOnPages: React.FC = () => {
	const dispatch = useDispatch()
	const value = useSelector((state: RootState) => state.itemsOnPages.filterItemsOnPage)

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value
		dispatch(setItemsOnPage(value))
	}

	return (
		<div className={styles.content}>
			<p className={styles.text}>
				Items on Page
			</p>
			<select id="itemsOnPage" onChange={handleChange} value={value} className={styles.select} name="categories">
				<option value="10">10</option>
				<option value="15">15</option>
				<option value="25">25</option>
				<option value="40">40</option>
			</select>
		</div>
	)
}

export default FilterItemsOnPages;
