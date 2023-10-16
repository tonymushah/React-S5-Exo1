import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { AnimatePresence } from "framer-motion";

export default function App() {
    return (
        <AnimatePresence>
            <Box>
                <Header />
                <Body />
            </Box>
        </AnimatePresence>
    )
}