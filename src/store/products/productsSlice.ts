
import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByCatPrefix from "./act/actGetProductsByCatPrefix";
import { TLoading } from "@customTypes/Shared";
import { TProduct } from "@customTypes/product";



interface TProductsState {
    records: TProduct[];
    loading: TLoading;
    error: string | null;
  }


const initialState:TProductsState ={
records:[],
loading:"idle",
error:null
}

const ProductsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers:{
        productsCleanUp :(state)=>{
            state.records = []
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(actGetProductsByCatPrefix.pending,(state)=>{
            state.loading = "pending"
            state.error = null
        })
        builder.addCase(actGetProductsByCatPrefix.fulfilled,(state , action)=>{
            state.loading = "succeeded"
            state.records = action.payload

        })
        builder.addCase(actGetProductsByCatPrefix.rejected,(state , action)=>{
            state.loading = "failed"
            if (action.payload && typeof action.payload === "string") {
                state.error = action.error.message as string 
            }
            

        })
    }
})

export const {productsCleanUp} = ProductsSlice.actions
export {actGetProductsByCatPrefix}
export default ProductsSlice.reducer;