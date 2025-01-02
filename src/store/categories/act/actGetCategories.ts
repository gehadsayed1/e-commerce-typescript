import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TCategories } from "@types";
import {axiosErrorHandler} from "@utils";


type TResponse =  TCategories[]

const actGetCategories = createAsyncThunk("getCategories/actGetCategories" , async (_, thunkAPI)=>{
    const {rejectWithValue ,signal} = thunkAPI;

    try {
        const response = await axios.get<TResponse>("/category" , {signal});
        return response.data;   
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }

})

export default actGetCategories