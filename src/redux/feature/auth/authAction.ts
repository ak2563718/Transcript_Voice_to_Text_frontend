import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUri = `http://localhost:3000/api`
export const userLogin = createAsyncThunk<unknown,void>(
    'user/Login',
    async( user, {rejectWithValue})=>{
        try {
            const { data } = await axios.post(`${baseUri}/login`,user,{
                headers:{'Content-Type':"application"},
                withCredentials:true,
            })
            return data;
        } catch (error) {
           if(error.response){
             return rejectWithValue(error.response.data.message);
           } 
        }
    }
)