import { useEffect,useState } from "react";
import Logo from "../../../assets/cart.svg?react";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/CartSlice";
import styles from "./styles.module.css";
const { basketContainer, basketQuantity ,pumpCartQuantity} = styles;

const HeaderBasket = () => {
  const [isAnimate , setIsAnimate] = useState(false);
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);
  const quantityClass = `${basketQuantity} ${isAnimate ? pumpCartQuantity : ""}`
  
useEffect(() => {
  if (!totalQuantity) {
    return;
  }
  setIsAnimate(true);
 const debounce = setTimeout(() => {
   setIsAnimate(false);
 }, 300);
 return () => {
   clearTimeout(debounce);
 }
}, [totalQuantity]);

  
  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={quantityClass}>{totalQuantity}</div>
    </div>
  );
};

export default HeaderBasket;