import { useDispatch, useSelector } from "react-redux";
import { Button } from "components/Button/Button";
import { selectStatusFilter } from "redux/selectors";
import { setStatusFilter } from "redux/filtersSlice";
import { statusFilters } from "redux/constants";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectStatusFilter);

    const handleFilterChange = filter =>
        dispatch(setStatusFilter(filter));
    
    return (
        <div className={css.wrapper}>
            <Button
                selected={filter === statusFilters.all}
                onClick={() => handleFilterChange(statusFilters.all)}
            >
                All
            </Button>
            <Button
                selected={filter === statusFilters.active}
                onClick={() => handleFilterChange(statusFilters.active)}
            >
                Active
            </Button>
            <Button
                selected={filter === statusFilters.completed}
                onClick={() => handleFilterChange(statusFilters.completed)}
            >
                Completed
            </Button>
        </div>
    );
};