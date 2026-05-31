import { createAsyncThunk } from '@reduxjs/toolkit'
import axios  from 'axios'

const baseuri = 'http://localhost:4000/api'

export const getallTranscript = createAsyncThunk(
    'text/all',
    async( _ , {rejectWithValue})=>{
        try {
            const { data } = await axios.get(`${baseuri}/alltranscript`,{
                headers:{'Content-Type':'application/json'},
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

export const getoneTranscript = createAsyncThunk(
    'text/one',
    async( id:string , {rejectWithValue})=>{
        try {
            const { data } = await axios.get(`${baseuri}/getone/${id}`,{
                headers:{'Content-Type':'application/json'},
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

export const deleteTranscript = createAsyncThunk(
    'text/delete',
    async( id:string , {rejectWithValue})=>{
        try {
            const { data } = await axios.get(`${baseuri}/delete/${id}`,{
                headers:{'Content-Type':'application/json'},
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



