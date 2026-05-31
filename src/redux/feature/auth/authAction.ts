import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface LoginData{
    email:string,
    password:string,
}

interface signupData{
    name:string,
    username:string,
    email:string,
    password:string,
}

const baseUri = `http://localhost:4000/api`
export const userLogin = createAsyncThunk(
    'user/Login',
    async( user:LoginData, {rejectWithValue})=>{
        try {
            console.log("login data",user)
            const { data } = await axios.post(`${baseUri}/login`,user,{
                headers:{'Content-Type':"application/json"},
                withCredentials:true,
            })
            return data;
        } catch (error) {
           if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data?.message)
           }
           return rejectWithValue("Something went wrong");
        }
    }
)

export const userSignup = createAsyncThunk(
    'user/Signup',
    async( info:signupData , {rejectWithValue})=>{
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
            return rejectWithValue("Something went wrong");
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
           return rejectWithValue("Something went wrong");
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
            return rejectWithValue("Something went wrong");
        }
    }
)