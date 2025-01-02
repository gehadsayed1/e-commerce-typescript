import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetWishlist,
  productsFullInfoCleanUp,
} from "@store/wishlist/WishlistSlice";

function useWishlist() {
    const dispatch = useAppDispatch();
    const { loading, error, productsFullInfo } = useAppSelector(
      (state) => state.wishlist
    );
    const cartItems = useAppSelector((state) => state.cart.items);
  
    useEffect(() => {
  const proems =    dispatch(actGetWishlist());
      return () => {
        proems.abort();
        dispatch(productsFullInfoCleanUp());
      };
    }, [dispatch]);
  
    const records = productsFullInfo.map((el) => ({
      ...el,
      quantity: cartItems[el.id],
      isLiked: true,
    }));
  
  return {loading , error , records}
}

export default useWishlist