export interface ProfileState {
    profileId: null | number
    error: null | string
    profileInfo: ProfileInfo | null
}

export enum ProfileActionTypes {
    FETCH_PROFILE = 'FETCH_PROFILE',
    FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS',
    FETCH_PROFILE_ERROR = 'FETCH_PROFILE_ERROR'
}

interface FetchProfileAction {
    type: ProfileActionTypes.FETCH_PROFILE
}

interface ProfileInfo {
    "solo_competitive_rank": 0,
    "competitive_rank": 0,
    "rank_tier": 0,
    "leaderboard_rank": 0,
    "mmr_estimate": {
        "estimate": 0
    },
    "profile": {
        "account_id": 0,
        "personaname": "string",
        "name": "string",
        "plus": true,
        "cheese": 0,
        "steamid": "string",
        "avatar": "string",
        "avatarmedium": "string",
        "avatarfull": "string",
        "profileurl": "string",
        "last_login": "string",
        "loccountrycode": "string",
        "is_contributor": false,
        "is_subscriber": false
    }
}

interface FetchProfileSuccessAction {
    type: ProfileActionTypes.FETCH_PROFILE_SUCCESS
    payload: ProfileInfo
}

interface FetchProfileErrorAction {
    type: ProfileActionTypes.FETCH_PROFILE_ERROR
    payload: string
}

export type ProfileAction =
    FetchProfileAction
    | FetchProfileSuccessAction
    | FetchProfileErrorAction