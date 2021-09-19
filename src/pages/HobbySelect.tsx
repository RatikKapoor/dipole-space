import { Button } from "@mui/material"
import React from "react"
import { useHistory } from "react-router";
import { HobbyButton } from "../components/hobbies/HobbyButton";
// import { useAppSelector } from "../app/hooks"
// import { selectUser } from "../features/user/userSlice"
import { 
    // useUpdateUserMutation, 
    // User as UserData, 
    HobbyType } from "../generated-types"
import darkBlueWaves from '../styles/vectors/dark-blue-waves.svg'

export const HobbySelect: React.FC = () => {
    // const user = useAppSelector(selectUser)
    // const [selectedHobbies, setSelectedHobbies] = useState<HobbyType[]>([]);
    // const [updateUserMutation] = useUpdateUserMutation()

    const hobbies = Object.keys(HobbyType);
    const history = useHistory()

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
            <div className="hobbies-content">
                <div className="hobbies-header">
                    <h2>Choose your Hobbies</h2>
                    <Button className="hobby-next-button" fullWidth variant="contained" onClick={() => history.push("/")}>
                        Next
                    </Button>
                </div>
                <div className="hobby-selector">
                    {hobbies.map((h: string, i: number) => {
                        return (<div key={i} ><HobbyButton hobby={h} selected={false}/></div>)
                    })}
                </div>
            </div>
            <img className="dark-waves" src={darkBlueWaves} />
        </div>
    )
}
