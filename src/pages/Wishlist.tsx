import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetWishlist,
  productsFullInfoCleanUp,
} from "@store/wishlist/WishlistSlice";

import { GridList, Heading } from "@components/common";
import { Product } from "@components/ecommerce";

import { TProduct } from "@customTypes/product";
import Loading from "@components/feedback/loading/Loading";

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const { loading, error, productsFullInfo } = useAppSelector(
    (state) => state.wishlist
  );
  const cartItems = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(actGetWishlist());
    return () => {
      dispatch(productsFullInfoCleanUp());
    };
  }, [dispatch]);

  const records = productsFullInfo.map((el) => ({
    ...el,
    quantity: cartItems[el.id],
    isLiked: true,
  }));

  return (
    <>
      <Heading>Your Wishlist</Heading>
      <Loading status={loading} error={error}>
        <GridList<TProduct>
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Wishlist;