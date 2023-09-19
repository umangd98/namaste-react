
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {

    const {resId} = useParams()
    const resInfo = useRestaurantMenu(resId)

    if(resInfo === null ){
        return <Shimmer/>
    }
    
    const {name, cuisines, costForTwoMessage, locality } = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards}  = resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    return  (
        <div className="p-4 m-4 mx-auto bg-gray-100 border border-black border-solid rounded-md w-96">
            <h1 className="text-2xl font-bold my-3">{name}</h1>
            <p className="text-md ">Cuisines - {cuisines.join(', ')}</p>
            <p className="text-md ">{costForTwoMessage}</p>
            <p className="text-md ">{locality}</p>

            
            <h2 className="text-xl font-bold my-4">Menu</h2>
            <ol className="list-none hover:list-disc">
                {itemCards.map(({card}) => {
                    return (
                        <li className="mx-2" key={card.info.id}>{card.info.name} - Rs. {card.info?.price/100}</li>
                    )
                })}
            </ol>
        </div>
    )
}

export default RestaurantMenu;