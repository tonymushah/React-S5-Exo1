import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";

export default function App(){
    return (
        <Box>
            <Header/>
            <Body/>
        </Box>
    )
}