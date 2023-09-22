import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({resData}) => {

    const {loggedInUser} = useContext(UserContext)
    const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId} = resData?.info
    return (
        <div className="m-4 p-4 w-[250px] rounded-md hover:bg-gray-200 bg-gray-100" >
            <img className="object-fill h-32 w-56 rounded-md"
             src={CDN_URL + cloudinaryImageId}/>
             <h3 className="font-bold py-4 text-lg">{name}</h3>
             <h4>{cuisines.join(', ')}</h4>
             <h4>{avgRating} stars</h4>
             <h4>{costForTwo}</h4>
             <h4>{sla.slaString}</h4>
             <h4>User: {loggedInUser}</h4>
        </div>
    )
}


//HOC - higher order component 

//input - restaurant card

//output - restaurant card with veg symmbol 


export const withVegLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-green-700 text-white p-0.5 rounded-md">Vegeterian</label>
                <RestaurantCard {...props} /> 
            </div>
        )
    }
}

export default RestaurantCard;