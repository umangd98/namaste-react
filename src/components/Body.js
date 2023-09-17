import RestaurantCard from "./RestaurantCard"
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import  Shimmer  from "./Shimmer";
const Body = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")
    useEffect(()=>{
        fetchData();
        console.log('useEffect frmo body called')
    }, [])
    
    const fetchData = async () => {
        const data = await fetch( "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json()
        const fetchedList = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(fetchedList)
        setFilteredRestaurants(fetchedList)
    
    }
    //conditional rendering
   console.log('Body Re rendered')
    return listOfRestaurants?.length === 0 ?  <Shimmer /> :  (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={
                        (e)=>{
                            setSearchText(e.target.value)
                        }
                    }/>
                    <button onClick={()=> {
                        //filter the restaurants cards and update UI
                        //ssearch text 
                        // console.log(searchText)
                        const filteredlist = listOfRestaurants.filter((res)=> res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurants(filteredlist)
                    }}>Search</button>
                </div>
                    <button className="filter-btn" onClick={()=>{
                        // console.log('button clicked')
                        const filteredList = listOfRestaurants.filter(res => res.info.avgRating>4)
                        console.log('filtered list => ', filteredList)
                        setFilteredRestaurants(filteredList)

                    }}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">

               {
                filteredRestaurants?.map((res)=> (
          <Link key={res.info.id}  to={"/restaurants/" + res.info.id}><RestaurantCard resData = {res}/></Link>  
                    
                ))
               }
              

            </div>
        </div>
    )
}



export default Body