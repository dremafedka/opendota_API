import React, {useEffect, useRef, useState} from "react";
import {fetchProfile} from "../store/action-creators/profile";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import '../index.css'


export const Profile = () => {
    const {profileId, error, profileInfo} = useTypedSelector(state => state.profile)
    const {fetchProfile} = useActions()
    let inputRef = useRef<HTMLInputElement>(null)
    const[ID, SetID] = useState(239924979)
    const[inputValue, setInputValue] = useState(0)
    useEffect(() => {
        console.log(profileInfo?.profile.personaname)
        fetchProfile(ID)
    }, [ID])
    return(
        <div className={'text-sm text-gray-500 sm:text-center dark:text-gray-400 bg-zinc-900'}>
            <div className={'flex justify-center p-4'}>
                <input
                type="number"
                placeholder={'enter profile id'}
                ref={inputRef}
                className={"bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 " +
                    "inline-block w-1/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                //value={asd}
                onChange={(e) => {setInputValue(parseInt(e.target.value))}}
            />
                <button className={'bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm py-2 px-4 rounded inline-flex items-center'} onClick={()=>{SetID(parseInt(String(inputValue)))}}>Search</button>
            </div>
            <div className={'flex justify-center p-16'}>
                <img src={profileInfo?.profile.avatarfull} />
            </div>
            <div className={'flex justify-center p-4'}>
                MMR - {profileInfo?.mmr_estimate.estimate}
            </div>
            <div className={'flex justify-center p-4'}>
                Nickname - {profileInfo?.profile.personaname}
            </div>
            <div className={'flex justify-center p-4'}>
                DotaPlus - {profileInfo?.profile.plus ? 'Yes': 'No'}
            </div>
            <div className={'flex justify-center p-4'}>
                URL - <a className={'hover:underline'} href={profileInfo?.profile.profileurl}>
                {profileInfo?.profile.profileurl}</a>
            </div>
            <div className={'flex justify-center p-4'}>
                ID - {profileInfo?.profile.steamid}
            </div>
        </div>
    )
}