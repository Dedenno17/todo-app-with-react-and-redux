import { useDispatch } from "react-redux";
import { setItem } from "../features/item";

const Clear = () => {    

    const dispatch = useDispatch();

    return (
        <>
            <button className="clear" onClick={() => dispatch(setItem([]))}>Clear All</button>
        </>
    );
}
 
export default Clear;