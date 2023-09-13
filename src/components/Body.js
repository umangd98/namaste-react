import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useState } from "react";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)
    return (
        <div className="body">
            <div className="filter">
                    <button className="filter-btn" onClick={()=>{
                        // console.log('button clicked')
                        const filteredList = listOfRestaurants.filter(res => res.info.avgRating>4)
                        console.log('filtered list => ', filteredList)
                        setListOfRestaurants(filteredList)

                    }}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">

               {
                listOfRestaurants.map((res,index)=> (
            <RestaurantCard key={res.info.id} resData = {res}/>
                    
                ))
               }
              

            </div>
        </div>
    )
}



export default Body