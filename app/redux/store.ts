import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './slicer'
export const makeStore = () => {
    return configureStore({
        reducer: {
            auth: AuthReducer, 
        }
    })
}