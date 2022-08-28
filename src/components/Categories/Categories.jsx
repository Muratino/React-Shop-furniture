import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setCategoriesItem, setItems} from '../../redux/Slice/fetchItems';
import { ShopServers } from '../API/Fetch';

const allCategoties = [
    {key: 'all', name: 'Все'},
    {key: 'chairs', name: 'Стулья'},
    {key: 'bed', name: 'Кровати'},
    {key: 'tables', name: 'Столы'},
    {key: 'sofa', name: 'Шкафы'},
]

export const Categories = () => {
    const { getCategoryItems, clearError, setProcess } = ShopServers();
    const dispatch = useDispatch();
    const { categoriesItem } = useSelector(state => state.fetchItems);

    const updateCategory = (category) => {
        clearError();
        getCategoryItems(category)
            .then(el => {
                const res = el.length === 12 ? 'all' : el[0].category
                dispatch(setCategoriesItem(res))
                dispatch(setItems(el));
                setProcess("confirmed");
            })
            .catch((e) =>  {console.log(e); alert('Произошла ошибка, подождите и попробуйте заново')});
    };


    return (
        <div className='categories'>
            {
                allCategoties.map(el => (
                    <div 
                        key={el.key} 
                        onClick={() => updateCategory(el.key)}
                        className={`categories-item ${el.key === categoriesItem ? 'active' : ''}`}>{el.name}</div>
                ))
            }
        </div>
    );
}
