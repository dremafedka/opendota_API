import {Dispatch} from "redux";
import {ProfileAction, ProfileActionTypes} from "../../types/profile";
import axios from "axios";


export const fetchProfile = (profileId: number) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            dispatch({type: ProfileActionTypes.FETCH_PROFILE})
            const response = await axios.get('https://api.opendota.com/api/players/' + profileId)
            if (response.data.profile != null){
                dispatch({type: ProfileActionTypes.FETCH_PROFILE_SUCCESS, payload: response.data})
                console.log('123')
                console.log(response.data)
            }
        }catch (e) {
            console.log('errror')
            dispatch({
                type: ProfileActionTypes.FETCH_PROFILE_ERROR,
                payload: 'Error'
            })
        }
    }
}

