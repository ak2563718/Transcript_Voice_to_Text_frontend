import { configureStore } from '@reduxjs/toolkit'
import authReducer from './feature/auth/authSlice'
import textReducer from './feature/text/textSlice'

const store = configureStore(
    {
        reducer:{
            auth:authReducer,
            text:textReducer,
        }
    }
)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;