import { Button } from "@mui/material"
// import { useState } from "hoist-non-react-statics/node_modules/@types/react"
import React from "react"
// import { useAppSelector } from "../app/hooks"
// import { selectUser } from "../features/user/userSlice"
// import { useUpdateUserMutation, User as UserData, HobbyType } from "../generated-types"

export const HobbySelect: React.FC = () => {
    // const user = useAppSelector(selectUser)
    // const [selectedHobbies, setSelectedHobbies] = useState<HobbyType[]>([]);
    // const [updateUserMutation] = useUpdateUserMutation()

    // const hobbies = Object.keys(HobbyType);

    // const updateUserHobbies = async () => {
    //     if (!user.user) return;
    //     const newDetails: UserData = Object.assign(user.user)

    //     // newDetails.hobbies 
    // }

    // const addHobby = (hobby: HobbyType) => {
    //     if (selectedHobbies.includes(hobby)) return;
    //     setSelectedHobbies([hobby, ...selectedHobbies])
    // }

    // const removeHobby = (hobby: HobbyType) => {
    //     if (!selectedHobbies.includes(hobby)) return;
    //     setSelectedHobbies(selectedHobbies.filter(x => x !== hobby))
    // }

    return (
        <div className="hobby-selection-page">
            <div className="hobbies-header">
                <h2>Choose your Hobbies</h2>
                <Button className="hobby-next-button">Next</Button>
            </div>
            <div className="hobby-selector">

            </div>
        </div>
    )
}
