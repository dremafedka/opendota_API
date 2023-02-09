import {combineReducers} from "redux";
import {profileReducer} from "./profileReducer";


export const rootReducer = combineReducers({
    profile: profileReducer
})

export type RootState = ReturnType<typeof rootReducer>
