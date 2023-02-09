import {ProfileState, ProfileAction, ProfileActionTypes} from "../../types/profile";

const initialState: ProfileState = {
    profileId: null,
    error: null,
    profileInfo: null
}

export const profileReducer = (state = initialState, action: ProfileAction): ProfileState =>{
    switch (action.type){
        case ProfileActionTypes.FETCH_PROFILE:
            return {error: null, profileId: null, profileInfo: null}
        case ProfileActionTypes.FETCH_PROFILE_SUCCESS:
            return {error: null, profileId: null, profileInfo: action.payload}
        case ProfileActionTypes.FETCH_PROFILE_ERROR:
            return {error: action.payload,profileId: null, profileInfo: null}
        default:
            return state
    }
}