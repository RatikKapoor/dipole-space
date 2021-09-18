import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error"
import { UserReact } from "../components/common/UserReact";
import { Gender } from "../components/common/Gender";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "@fontsource/poppins";


export const Profile: React.FC = () => {
  return (
    <Container maxWidth="xs">
      <Box sx={{
        bgcolor: 'primary.light',
      }}>
        <h1>Name</h1>
        <p>Age</p>
        <p>Bio</p>
      </Box>
      
      <Box sx={{
        bgcolor: 'primary.light',
      }}>
        <h2>Top Activities</h2>
        <p>a</p>
        <p>b</p>
        <p>c</p>
        <Button>More Activities</Button>
      </Box>

      <Box sx={{
        bgcolor: 'primary.light',
      }}>
        <h2>Future Plans</h2>
        <p>d</p>
        <p>e</p>
      </Box>

      <UserReact />

    </Container>
  );
};
