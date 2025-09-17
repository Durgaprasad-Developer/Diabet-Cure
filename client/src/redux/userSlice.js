import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user: null,
    loading: false,
    initialized: false,
}

const userSlice = createSlice({
    name:"user",
    initialState,

    reducers:{
        setAuthLoading:(state,action) => {
            state.loading = action.loading;
        },
        setUserData:(state,action) =>{
            state.user = action.payload;
            state.loading = false;
            state.initialized = true;
        },
        clearUserData:(state, action) => {
            state.user = action.null;
            state.loading = false;
            state.initialized = true;
        }
    }


})

export const {setUserData, clearUserData, setAuthLoading} = userSlice.actions;
export default userSlice.reducer