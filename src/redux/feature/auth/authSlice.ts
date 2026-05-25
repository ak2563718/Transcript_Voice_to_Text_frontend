import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user:[],
    loading:false,
    message:null,
    error:null,
    islogin:false,
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

    }
})

export default authSlice.reducer;