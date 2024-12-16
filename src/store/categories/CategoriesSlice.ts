
import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import { TLoading } from "@customTypes/Shared";
import { TCategories } from "@customTypes/Category";



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
    reducers:{},
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
            if (action.payload && typeof action.payload === "string") {
                state.error = action.error.message as string 
            }
            

        })
    }
})


export {actGetCategories}
export default CategoriesSlice.reducer;