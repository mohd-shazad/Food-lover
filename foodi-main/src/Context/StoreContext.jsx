// import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";

// export const StoreContext = createContext({
//     food_list:[],
//     cartItem:{},
//     setCartItem:()=>{},
//     removeFromCart:()=>{},
//     addToCart:()=>{}
// });

// const StoreContextProvider = (props) =>{

//     const [cartItem, setCartItem] = useState({});

//     const addToCart = (itemId) => {
//         if(!cartItem[itemId]) {
//             setCartItem((prev) =>({...prev,[itemId]:1}))
//         }else {
//             setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
//         }
//     }

//     const removeFromCart = (itemId) => {
//         setCartItem((prev)=> ({...prev,[itemId]:prev[itemId]-1}))
//     }

//     useEffect(() => {
//         console.log(cartItem);

//     },[cartItem])

//     const contextValue = {
//         food_list,
//         cartItem,
//         setCartItem,
//         removeFromCart,
//         addToCart
//     }
//     return(
//         <StoreContext.Provider value={contextValue}>
//         {props.children}
//         </StoreContext.Provider>
//     )
// }

// export default StoreContextProvider;

import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

// ✅ Proper default value provided to avoid null errors   
export const StoreContext = createContext({
  food_list: [],
  cartItem: {},
  setCartItem: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  getTotalCartAmount: ()=> {}
  
});

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  const addToCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => {
      if (!prev[itemId]) return prev;
      const newCount = prev[itemId] - 1;
      if (newCount <= 0) {
        const newCart = { ...prev };
        delete newCart[itemId];
        return newCart;
      }
      return { ...prev, [itemId]: newCount };
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount
  };

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    removeFromCart,
    addToCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
export { StoreContextProvider };
