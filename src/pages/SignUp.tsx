/* eslint-disable react/jsx-no-undef */
import { Button, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { useCreateUserMutation, CreateUserInput, Gender } from '../generated-types'
import {
    getAuth,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { ChevronLeft } from "@mui/icons-material";
import darkBlueWaves from '../styles/vectors/dark-blue-waves.svg'
import lightBlueWaves from '../styles/vectors/light-blue-waves.svg'
import landingIconTop from "../styles/vectors/landing-icon-top.svg";
import landingIconBottom from "../styles/vectors/landing-icon-bottom.svg";
import { useHistory } from "react-router";

export const SignUp: React.FC = () => {
    const auth = getAuth()
    const [createUserMutation] = useCreateUserMutation()

    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [gender, setGender] = useState<Gender>(Gender.Male)
    const [birthDay, setBirthDay] = useState<string>("")
    const [photoUrl] = useState<string>("")
    const [bio, setBio] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [signUpPage, setSignUpPage] = useState<number>(1)

    const history = useHistory()

    const createUserWithPassword = async (): Promise<boolean> => {
        try {
            const result = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            console.log("Create user result", result)

            const data: CreateUserInput = {
                authId: result.user.uid,
                birthDate: birthDay,
                email: email,
                firstName: firstName,
                gender: gender,
                lastName: lastName,
                phoneNumber: phoneNumber,
                bio: bio,
                photoUrl: photoUrl,
            }

            console.log("Data", data)

            createUserMutation({ variables: { input: data } })

            return true;
        } catch (e) {
            console.error(e);
            return false;
        }
    }

    const handleSubmit = async (): Promise<void> => {
        await createUserWithPassword()
    }

    return (
        <div className="auth-screen signup-screen">
            <div className="auth-container">
            <div className="auth-back" onClick={() => {signUpPage === 1 ? history.push("/") : setSignUpPage(1)}}>
                <ChevronLeft />
                <p>Back</p>
            </div>
            <div className={`auth-header ${signUpPage === 2 && 'less-margin'}`}>
                <h2>Create an account</h2>
            </div>
            <div className="auth-fields">

                {
                    signUpPage === 1 ?
                        <>
                            <TextField
                                label="Email Address"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <TextField
                                label="Password"
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </>
                        : <>
                            <TextField
                                label="First Name"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                            />
                            <TextField
                                label="Last Name"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                            />
                            <TextField
                                label="Phone Number"
                                value={phoneNumber}
                                onChange={e => setPhoneNumber(e.target.value)}
                            />
                            <TextField
                                label="Birthday"
                                value={birthDay}
                                onChange={e => setBirthDay(e.target.value)}
                            />
                            <TextField
                                label="Bio"
                                multiline={true}
                                value={bio}
                                onChange={e => setBio(e.target.value)}
                            />
                            <Select
                                label="Gender"
                                onChange={e => setGender((e.target.value as Gender))}
                                value={gender}
                            >
                                <MenuItem value={Gender.Female}>{Gender.Female.toString()}</MenuItem>
                                <MenuItem value={Gender.Male}>{Gender.Male.toString()}</MenuItem>
                                <MenuItem value={Gender.Other}>{Gender.Other.toString()}</MenuItem>
                            </Select>
                        </>
                }
            </div>
            {
                signUpPage === 1 ?
                    <Button
                        fullWidth
                        variant="contained"
                        className="auth-button"
                        onClick={() => { setSignUpPage(2) }}
                    >
                        Next
                    </Button> :
                    <Button
                        // type="submit"
                        fullWidth
                        variant="contained"
                        className="auth-button"
                        onClick={handleSubmit}
                    >
                        Create Account
                    </Button>
            }
            </div>
            {   
                signUpPage === 1 && <>
                    <img className="signup-icon left" src={landingIconTop} />
                    <img className="signup-icon right" src={landingIconBottom} />
                </>
            }
            <img className={`footer-waves dark-waves ${signUpPage === 2 && 'shorter'}`} src={darkBlueWaves}/>
            { signUpPage === 1 && <img className="footer-waves light-waves" src={lightBlueWaves}/>}
        </div>
    )
}
