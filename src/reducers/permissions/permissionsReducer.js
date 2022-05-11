
import { createSlice } from "@reduxjs/toolkit"

const initialialState = {
    isLoading: false,
    permissions: [],
    errorMsg: ""
}

const permissionsSlice = createSlice({
    name:"permissions",
    initialState: initialialState,
    reducers:{
        getPermissions(state,action){
            state.isLoading = true;
        },
        getPermissionsSuccess(state,action){
            state.isLoading = false;
            state.permissions = action.payload;
        },
        getPermissionsFail(state,action){
            state.errorMsg = `There was an error retrieving the data: ${action.payload}`
        }
    }
})


export const {getPermissions,getPermissionsSuccess,getPermissionsFail} = permissionsSlice.actions;

export default permissionsSlice.reducer;