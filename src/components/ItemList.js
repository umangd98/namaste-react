import React from 'react'
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({items}) => {
    // console.log('items -> ', items);

    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        //dispatch action. 
        dispatch(addItem(item))

    }
  return (
    <div>
        {items?.map(item =>
        <div data-testid = "fooditems" key={item.card.info.id} className='p-2 m-2 border border-b-gray-200 text-left'>
            <div className='py-2 flex justify-between align-middle'>
                <div className='w-9/12'> 
                    <span className='block'>{item.card.info.name}</span>
                    <span className='text-sm' >₹{item.card.info.price/100 | item.card.info.defaultPrice /100}</span>
                    <p className='text-xs pt-2 pr-2'>{item.card.info.description}</p>
                </div>
                <div className='relative w-3/12'>
                    {item.card.info?.imageId!==undefined?<img className='' src={CDN_URL + item.card.info.imageId} /> : null}
                    <button onClick={() => handleAddItem(item)} className='absolute shadow-lg bottom-1 bg-white text-green-600 p-1.5 rounded-md'>ADD</button>
                </div>
            </div>
           
        </div>)}
    </div>
  )
}

export default ItemList