import { useSelector, useDispatch } from 'react-redux'
import { setArrOrders, deleteOneOrders } from "../../redux/Slice/fetchItems";

export const View = () => {
    const dispatch = useDispatch();
    const { arrOrders, items } = useSelector(state => state.fetchItems);

    const addItemToCart = (item) => {
        dispatch(setArrOrders(item))
    }

    return (
        <>
            {items.map((el) => {
                return (
                    <div key={el.id} className="item">
                        <img src={`./img/${el.img}`} alt="img" />
                        <h2>{el.title}</h2>
                        <p>{el.desc}</p>
                        <b>{el.price} $</b>
                        {arrOrders.some(item => item.id === el.id)
                            ? <div
                                key={el.id}
                                onClick={() => dispatch(deleteOneOrders(el.id))}
                                className="add-to-cart">-</div>
                            : <div
                                key={el.id}
                                onClick={() => addItemToCart(el)}
                                className="add-to-cart">+</div>
                        }
                    </div>
                );
            })}
        </>
    );
};