import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user: null,
}

const userSlice = createSlice({
    name:"user",
    initialState,

    reducers:{
        setUserData:(state,action) =>{
            state.user = action.payload;
        },
        clearUserData:(state, action) => {
            state.user = action.null;
        }
    }


})

export const {setUserData, clearUserData} = userSlice.actions;
export default userSlice.reducer