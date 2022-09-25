import { createContext, useState } from "react";
import Data from "./../Data/FData";
import ShData from "./../Data/ShData"

export const APIContext = createContext();

export function APIContextProvider(props) {

  const [count, setCount] = useState(0);
  const [cardItem, setCardItem] = useState([]);

  const { productItems } = Data;
  const { shopItems } = ShData;
  const Increment = () => {
    setCount(count + 1);
  };

  const addToCart = (product) => {
    const productExist = cardItem.find((item) => item.id == product.id);
   
    if (productExist) {
      setCardItem(
        cardItem.map((item) =>
          item.id == product.id
            ? { ...productExist, qty: productExist.qty + 1 }
            : item
        )
      );
    }else{
        setCardItem([...cardItem ,{...product, qty: 1}])
    }
  };

  const removeCart = function (product) {
   const productExist = cardItem.find((item) => item.id == product.id);

   if(productExist.qty >= 1 ){
    setCardItem(cardItem.filter((item) => item.id !== product.id))
   }

  }

  const decreaseCart = function (product) {
    const productExist = cardItem.find((item) => item.id == product.id);

    if (productExist.qty == 1) {
      setCardItem(cardItem.filter((item) => item.id !== product.id))
    }else{
      setCardItem(cardItem.map((item) => item.id == product.id? {...productExist , qty: productExist.qty - 1} : item))
    }
    
  }
  

  return (
    <APIContext.Provider
      value={{
        flashData: productItems,
        count,
        Increment,
        addToCart,
        cardItem,
        removeCart,
        decreaseCart,
        shopItems,
      }}
    >
      {props.children}
    </APIContext.Provider>
  );
}
