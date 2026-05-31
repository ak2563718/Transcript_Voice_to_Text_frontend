import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUri = `http://localhost:3000/api`
export const userLogin = createAsyncThunk(
    'user/Login',
    async( user, {rejectWithValue})=>{
        try {
            const { data } = await axios.post(`${baseUri}/login`,user,{
                headers:{'Content-Type':"application"},
                withCredentials:true,
            })
            return data;
        } catch (error) {
           if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data?.message)
           }
        }
    }
)

export const userSignup = createAsyncThunk(
    'user/Signup',
    async( info , {rejectWithValue})=>{
        try {
            const {data}= await axios.post(`${baseUri}/signup`,info,{
                withCredentials:true,
                headers:{'Content-Type':'application/json'},
            })
            return data;
        } catch (error) {
            if(axios.isAxiosError(error)){
                return rejectWithValue(error.response?.data?.message)
            }
        }
    }
)

export const userLogout = createAsyncThunk(
    'user/logout',
    async( _ , {rejectWithValue})=>{
        try {
            const { data } = await axios.get(`${baseUri}/logout`,{
                headers:{'Content-Length':"application/json"},
                withCredentials:true,
            })
            return data;
        } catch (error) {
           if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data?.message)
           } 
        }
    }
)

export const check_session = createAsyncThunk(
    'user/check-session',
    async( _ , {rejectWithValue})=>{
        try {
            const { data } = await axios.get(`${baseUri}/check-session`,{
                headers:{'Content-Type':"application/json"},
                withCredentials:true,
            })
            return data;
        } catch (error) {
            if(axios.isAxiosError(error)){
                return rejectWithValue(error.response?.data?.message)
            }
        }
    }
)