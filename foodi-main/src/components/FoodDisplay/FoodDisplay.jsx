import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css';
import React, { useContext } from 'react'

const FoodDisplay = ({category}) => {
    const { food_list } = useContext(StoreContext)
    console.log(food_list);
    
  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          console.log(category,item.category);
          if(category==="All" || category === item.category) {
             return(
             <FoodItem key={index} id={item._id || index} name={item.name} description={item.description} price={item.price} image={item.image}/>
             )

          }
          
          
          
 })}
      </div>
    </div>
  )
}

export default FoodDisplay;
