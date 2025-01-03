import { createSlice } from "@reduxjs/toolkit";
import actPlaceOrder from "./act/actPlaceOrder";
import actGetForOrders from "./act/actGetOrders";
import { TLoading, TOrderItem, isString } from "@types";

interface IOrderSlice {
  orderList: TOrderItem[];
  placeOrderLoading: TLoading;
  getOrdersLoading: TLoading;
  placeOrderError: string | null;
  getOrdersError: string | null;
}

const initialState: IOrderSlice = {
  orderList: [],
  placeOrderLoading: "idle",
  getOrdersLoading: "idle",
  placeOrderError: null,
  getOrdersError: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    resetOrderStatus: (state) => {
      state.placeOrderLoading = "idle";
      state.getOrdersLoading = "idle";
      state.placeOrderError = null;
      state.getOrdersError = null;
    },
  },
  extraReducers: (builder) => {
    // place order
    builder.addCase(actPlaceOrder.pending, (state) => {
      state.placeOrderLoading = "pending";
      state.placeOrderError = null;
    });
    builder.addCase(actPlaceOrder.fulfilled, (state) => {
      state.placeOrderLoading = "succeeded";
    });
    builder.addCase(actPlaceOrder.rejected, (state, action) => {
      state.placeOrderLoading = "failed";
      if (isString(action.payload)) {
        state.placeOrderError = action.payload;
      }
    });

    // get orders
    builder.addCase(actGetForOrders.pending, (state) => {
        state.getOrdersLoading = "pending";
        state.getOrdersError = null; 
      });
      
    builder.addCase(actGetForOrders.fulfilled, (state, action) => {
      state.getOrdersLoading = "succeeded";
      state.orderList = action.payload;
    });
    builder.addCase(actGetForOrders.rejected, (state, action) => {
      state.getOrdersLoading = "failed";
      if (isString(action.payload)) {
        state.getOrdersError = action.payload;
      }
    });
  },
});

export { actPlaceOrder, actGetForOrders };

export const { resetOrderStatus } = orderSlice.actions;

export default orderSlice.reducer;
