import { Button } from "components/Button/Button";
import { useDispatch } from "react-redux";
import { deleteAllCompleted, toggleAllCompleted } from "redux/tasksSlice";
import { Wrapper } from './Actions.styled';

export const Actions = () => {
    const dispatch = useDispatch();

    return <Wrapper>
        <Button
            onClick={() => dispatch(toggleAllCompleted())}
        >
            Mark All completed 
        </Button>
        <Button
            onClick={() => dispatch(deleteAllCompleted())}
        >
            Clear All completed 
        </Button>
    </Wrapper>
}