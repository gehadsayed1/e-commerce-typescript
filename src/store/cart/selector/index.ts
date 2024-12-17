import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../index";


const getCartTotalQuantitySelector = createSelector(
    (state:RootState) => state.cart.items,
    (items) => {
      const totalQuantity = Object.values(items).reduce(
        (total, item) => total + item,
        0
      );
      return totalQuantity;
    }
  );

  export { getCartTotalQuantitySelector}