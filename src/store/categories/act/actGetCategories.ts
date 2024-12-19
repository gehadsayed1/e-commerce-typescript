import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TCategories } from "@customTypes/Category";


type TResponse =  TCategories[]

const actGetCategories = createAsyncThunk("getCategories/actGetCategories" , async (_, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;

    try {
        const response = await axios.get<TResponse>("/category");
        return response.data;   
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data || error.message); 
        } else{
            return rejectWithValue("Something went wrong");
            }
    }

})

export default actGetCategories