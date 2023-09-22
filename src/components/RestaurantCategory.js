import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    // const [showItems, setShowItems] = useState(false)
    console.log('functino in ', setShowIndex)
    const handleClick = () => {
     setShowIndex()
    }
 console.log(data)
  return (
    <div>
        
            <div className='w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4'>
                <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                    <span className='font-bold text-md'>{data.title} ({data.itemCards?.length})</span>
                    <span>{showItems?"⬆️":"⬇️"}</span>
                </div>

            {showItems && <ItemList items={data.itemCards} />}
          
        </div>
    </div>
  )
}

export default RestaurantCategory