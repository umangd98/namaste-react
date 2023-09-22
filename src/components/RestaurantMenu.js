
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {

    const {resId} = useParams()
    const resInfo = useRestaurantMenu(resId)
    const [showIndex, setShowIndex] = useState(0);


    if(resInfo === null ){
        return <Shimmer/>
    }
    
    const {name, cuisines, costForTwoMessage, locality } = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards}  = resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    console.log('menu -> ', resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards)

    const categories = resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(c => c.card?.card?.["@type"].includes("v2.ItemCategory"))
    console.log('filtered -> ', categories)
    return  (
        <div className="p-4 m-4 text-center">
            <h1 className="text-2xl font-bold my-3">{name}</h1>
            <p className="text-md ">Cuisines - {cuisines.join(', ')}</p>
            <p className="text-md ">{costForTwoMessage}</p>
            <p className="text-md ">{locality}</p>

            
            <h2 className="text-xl font-bold my-4">Menu</h2>
            {/* <ol className="list-disc hover:list-disc">
                {itemCards.map(({card}) => {
                    return (
                        <li className="mx-2 py-1" key={card.info.id}>{card.info.name} - Rs. {card.info?.price/100 || card.info?.defaultPrice/100}</li>
                    )
                })}
            </ol> */}

            {categories.map((cat, index)=> {
                return (
                    //controlled component
                    <RestaurantCategory 
                    key={cat.card.card.title} 
                    data = {cat?.card?.card} 
                    showItems={index===showIndex } 
                    setShowIndex={() => setShowIndex(index===showIndex? null: index)}
                    />
                )
            })}
        </div>
    )
}

export default RestaurantMenu;