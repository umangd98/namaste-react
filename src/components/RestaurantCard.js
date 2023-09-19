import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {
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
            
        </div>
    )
}

export default RestaurantCard;