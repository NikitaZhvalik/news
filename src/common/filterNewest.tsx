import { useDispatch, useSelector } from "react-redux";
import { setFilterNewest } from "@/toolkitRedux/filterNewestReducer";

import styles from "@/styles/FilterNewest.module.css";

interface RootState {
	newest: {
		filterNewest: string
	}
}

const FilterNewest: React.FC = () => {
	const dispatch = useDispatch()

    const value = useSelector((state: RootState) => state.newest.filterNewest)

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value
		dispatch(setFilterNewest(value))
	}

	return (
		<div>
			<select onChange={handleChange} value={value} className={styles.select} name="categories">
				<option value="relevance">relevance</option>
				<option value="newest">newest</option>
			</select>
		</div>
	);
};

export default FilterNewest;
