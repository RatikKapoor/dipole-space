import { Box, Container, MenuItem, Select, TextField } from "@mui/material";
import React from "react";

export const SignUp: React.FC =  () => {
    return (
        <Container>
            <Box>
                <TextField
                    label="First Name"
                />
                <TextField
                    label="Last Name"
                />
                <TextField
                    label="Email Address"
                />
                <TextField
                    label="Password"
                />
                <TextField 
                    label="Bio"
                    multiline={true}
                />
                <Select
                    label="Gender"
                >
                    <MenuItem value={"female"}>Female</MenuItem>
                    <MenuItem value={"male"}>Male</MenuItem>
                    <MenuItem value={"other"}>Other</MenuItem>
                </Select>
            </Box>
        </Container>
    )
}