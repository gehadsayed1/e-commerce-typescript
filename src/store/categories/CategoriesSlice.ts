
import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import { TLoading,TCategories ,isString } from "@types";





interface ICategoriesState{
    records: TCategories[] ,
    loading:TLoading,
    error:string|null
}


const initialState:ICategoriesState ={
records:[],
loading:"idle",
error:null
}

const CategoriesSlice = createSlice({
    name: 'getCategories',
    initialState,
    reducers:{
        cleanUpCategories:(state)=>{
            state.records = [];
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(actGetCategories.pending,(state)=>{
            state.loading = "pending"
            state.error = null
        })
        builder.addCase(actGetCategories.fulfilled,(state , action)=>{
            state.loading = "succeeded"
            state.records = action.payload

        })
        builder.addCase(actGetCategories.rejected,(state , action)=>{
            state.loading = "failed"
            if (isString(action.payload)) {
                state.error = action.error.message as string 
            }
            

        })
    }
})


export {actGetCategories}
export const {cleanUpCategories} = CategoriesSlice.actions
export default CategoriesSlice.reducer;