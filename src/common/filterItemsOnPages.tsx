import { useDispatch, useSelector } from "react-redux";
import { setItemsOnPage } from "@/toolkitRedux/filterItemsOnPagesReducer";

const FilterItemsOnPages = () => {
	const dispatch = useDispatch()

    const value = useSelector((state :any) => state.itemsOnPages.filterItemsOnPage) //todo переделать для TS

	const handleChange = (e :any) => { //todo переделать на TS
		const value = e.target.value
		dispatch(setItemsOnPage(value))
	}

	return (
		<div className="filterNewest-box">
			<p>Items on Page</p>
			<select onChange={handleChange} value={value} className="filterNewest" name="categories">
				<option value="2">2</option>
				<option value="4">4</option>
			</select>
		</div>
	);
};

export default FilterItemsOnPages;
