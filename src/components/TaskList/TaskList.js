import { useSelector } from "react-redux";
import { selectVisibleTasks } from "redux/selectors";
import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";

export const TaskList = () => {
    const tasks = useSelector(selectVisibleTasks);

    return (
        <ul className={css.list}>
            {tasks.map(task => (
                <li key={task.id} className={css.listItem}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
};
