import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";



function useProducts() {
    const params = useParams();
    const productPrefix = params.prefix
    const dispatch = useAppDispatch();
    const { loading, error, records } = useAppSelector((state) => state.products);
    const cartItems = useAppSelector((state) => state.cart.items);
    const wishListItemsId = useAppSelector((state) => state.wishlist.itemsId);
  
    useEffect(() => {
const proems = dispatch(actGetProductsByCatPrefix(params.prefix as string));
  
      return () => {
        dispatch(productsCleanUp());
        proems.abort();
      };
    }, [dispatch, params]);
  
    const productsFullInfo = records.map((el) => ({
      ...el,
      quantity: cartItems[el.id],
      isLiked: wishListItemsId.includes(el.id),
    }));
  return { loading , error , productsFullInfo ,productPrefix}
 
}

export default useProducts