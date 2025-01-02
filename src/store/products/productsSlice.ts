
import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByCatPrefix from "./act/actGetProductsByCatPrefix";
import { TLoading ,TProduct ,isString} from "@types";




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
        cleanUpProductsRecords :(state)=>{
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
            if (isString(action.payload)) {
                state.error = action.error.message as string 
            }
            

        })
    }
})

export const {cleanUpProductsRecords} = ProductsSlice.actions
export {actGetProductsByCatPrefix}
export default ProductsSlice.reducer;