import RestaurantCard from "./RestaurantCard"
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import  Shimmer  from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";


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

    const onlineStatus = useOnlineStatus()
    if(onlineStatus === false) return (
        <h1>
            Looks like you're offline! Please check you internet connection.
        </h1>
    )
    //conditional rendering
   console.log('Body Re rendered')
    return listOfRestaurants?.length === 0 ?  <Shimmer /> :  (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={
                        (e)=>{
                            setSearchText(e.target.value)
                        }
                    }/>
                    <button className="px-4 py-2 bg-green-100 m-4" onClick={()=> {
                        //filter the restaurants cards and update UI
                        //ssearch text 
                        // console.log(searchText)
                        const filteredlist = listOfRestaurants.filter((res)=> res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurants(filteredlist)
                    }}>Search</button>
                </div>
                <div className="m-4 p-4">
                    <button className="px-4 py-2 bg-gray-200 m-4 rounded-lg shadow-md" onClick={()=>{
                        // console.log('button clicked')
                        const filteredList = listOfRestaurants.filter(res => res.info.avgRating>4)
                        console.log('filtered list => ', filteredList)
                        setFilteredRestaurants(filteredList)

                    }}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="flex flex-wrap">

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