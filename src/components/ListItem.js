import { useSelector } from "react-redux";

const ListItem = () => {
    
    const item = useSelector((state) => state.item.items);
    
    return (
        <ul className="list-item">
            {item.map((it) => {
                return <li key={it.id}>{it.item}</li>
            })}
        </ul>
    );
}
 
export default ListItem;