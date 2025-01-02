import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByItems,
  cartItemChangeQuantity,
  cartItemRemove,
  cleanCartProductsFullInfo,
} from "@store/cart/CartSlice";

function useCart() {
    const dispatch = useAppDispatch();
    const { items, productsFullInfo, loading, error } = useAppSelector(
      (state) => state.cart
    );
  
    useEffect(() => {
   const proems =   dispatch(actGetProductsByItems());
      return () => {
        proems.abort();
        dispatch( cleanCartProductsFullInfo())
      };
    }, [dispatch]);
  
    const products = productsFullInfo.map((el) => ({
      ...el,
      quantity: items[el.id],
    }));
  
    const changeQuantityHandler = useCallback(
      (id: number, quantity: number) => {
        dispatch(cartItemChangeQuantity({ id, quantity }));
      },
      [dispatch]
    );
  
    const removeItemHandler = useCallback(
      (id: number) => {
        dispatch(cartItemRemove(id));
      },
      [dispatch]
    );
  return {removeItemHandler , changeQuantityHandler , products , loading , error}
}

export default useCart