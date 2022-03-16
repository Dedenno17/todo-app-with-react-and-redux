import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItem } from '../features/item';

const InputUser = () => {

    const dispatch = useDispatch();
    const item = useSelector((state) => state.item.items);
    const [todo, setTodo] = useState('');

    const handleAdd = (todo) => {
        const id = Math.random() + 1;
        const newItem = {item : todo, id : id};
        const newList = [...item];
        newList.push(newItem);

        dispatch(setItem(newList));
    }

    return (
        <div className="input-user">
            <input
                type='text'
                placeholder="Add your new todo ..."
                onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={() => handleAdd(todo)}>+</button>
        </div>
    );
}
 
export default InputUser;