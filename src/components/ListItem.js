import { useSelector } from "react-redux";
import trash from '../image/trash-solid.svg' ;

const ListItem = () => {
    
    const item = useSelector((state) => state.item.items);
    
    return (
        <ul className="list-item">
            {item.map((it) => {
                return <li key={it.id}>
                            {it.item}
                            <button><img src={trash} alt='trash'/></button>
                       </li>
            })}
        </ul>
    );
}
 
export default ListItem;