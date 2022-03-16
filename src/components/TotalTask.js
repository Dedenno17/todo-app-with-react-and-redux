import Clear from "./Clear";
import { useSelector } from "react-redux";

const TotalTask = () => {

    const item = useSelector((state) => state.item.items);

    return (
        <div className="total-tasks">
            <p>You have {item.length} pending tasks</p>
            <Clear />
        </div>
    );
}
 
export default TotalTask;