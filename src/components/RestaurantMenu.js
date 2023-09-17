
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
        <div className="menu">
            <h1>{name}</h1>
            <p>Cuisines - {cuisines.join(', ')}</p>
            <p>{costForTwoMessage}</p>
            <p>{locality}</p>

            
            <h2>Menu</h2>
            <ol>
                {itemCards.map(({card}) => {
                    return (
                        <li key={card.info.id}>{card.info.name} - Rs. {card.info?.price/100}</li>
                    )
                })}
            </ol>
        </div>
    )
}

export default RestaurantMenu;