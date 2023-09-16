import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null)
    const {resId} = useParams()
    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(
            MENU_API+resId 
            );
        const json = await data.json()
         setResInfo(json.data)
    }
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