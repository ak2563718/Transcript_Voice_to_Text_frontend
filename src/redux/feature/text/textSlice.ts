import { createSlice } from '@reduxjs/toolkit'
import { deleteTranscript, getallTranscript, getoneTranscript } from './textAction'

interface TextState{
    texts: any,
    onetext:any,
    loading: boolean,
    message: string | null,
    error: string | null,
}

const initialState: TextState ={
    texts:[],
    onetext:{},
    loading: false,
    message: null,
    error: null,
}

const textSlice = createSlice({
    name:'text',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        //1. getalltexts
        builder.addCase(getallTranscript.pending,(state)=>{
            state.loading = true;
            state.message = null;
            state.error = null;
        }).addCase(getallTranscript.fulfilled,(state,action)=>{
            state.loading = false;
            state.message = action.payload.message;
            state.texts = action.payload.text;
        }).addCase(getallTranscript.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload as string;
        });

        //2 . get one text
        builder.addCase(getoneTranscript.pending,(state)=>{
            state.loading = true;
            state.error = null;
            state.message = null;
        }).addCase(getoneTranscript.fulfilled,(state,action)=>{
            state.loading = false;
            state.message= action.payload.message;
            state.onetext = action.payload.text;
        }).addCase(getoneTranscript.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload as string;
        });

        // 3. delete one text 
        builder.addCase(deleteTranscript.pending,(state)=>{
            state.loading = true;
            state.message = null;
            state.error = null;
        }).addCase(deleteTranscript.fulfilled,(state,action)=>{
            state.loading = false;
            state.message = action.payload.message;
            state.texts = state.texts.filter((t:{id:string})=>t.id !== action.payload.text.id)
        })

    }
})

export default textSlice.reducer;