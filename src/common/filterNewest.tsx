import { useDispatch, useSelector } from "react-redux";
import { setFilterNewest } from "@/toolkitRedux/filterNewestReducer";

const FilterNewest = () => {
	const dispatch = useDispatch()

    const value = useSelector((state :any) => state.newest.filterNewest) //todo переделать для TS
	
	const handleChange = (e:any) => { //todo переделать на TS
		const value = e.target.value
		dispatch(setFilterNewest(value))
	}

	return (
		<div className="filterNewest-box">
			<select onChange={handleChange} value={value} className="filterNewest" name="categories">
				<option value="relevance">relevance</option>
				<option value="newest">newest</option>
			</select>
		</div>
	);
};

export default FilterNewest;
