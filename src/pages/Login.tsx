import { Box, Button, Checkbox, Container, FormControlLabel, TextField } from "@mui/material";
import React from "react";

export const Login: React.FC = () => {
    return (
        <Container>
            <Box>
                <TextField 
                    label="Email Address"
                    name="email"
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                />
                <FormControlLabel
                    control={<Checkbox value="rembember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                >
                    Sign In
                </Button>
            </Box>
        </Container>
    )
}