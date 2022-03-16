import { useDispatch, useSelector } from "react-redux";
import { setItem } from "../features/item";
import trash from '../image/trash-solid.svg' ;

const ListItem = () => {
    
    const item = useSelector((state) => state.item.items);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        const newItem = item.filter((it) => it.id !== id);
        dispatch(setItem(newItem));
    }
    
    return (
        <ul className="list-item">
            {item.map((it) => {
                return <li key={it.id}>
                            {it.item}
                            <div className="delete-btn">
                                <button onClick={() => handleDelete(it.id)}><img src={trash} alt='trash'/></button>
                            </div>
                       </li>
            })}
        </ul>
    );
}
 
export default ListItem;