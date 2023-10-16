import { Box } from "@chakra-ui/react";
import React from "react";
import AllProducts from "./AllProducts";
import AllProductContextProvider from "./AllProducts/Product";
import {    spiltedDataAtom } from "../../lib/data/test";

export default function Body() {
    return (
        <AllProductContextProvider value={spiltedDataAtom}>
            <Box width={"100vw"}>
                <AllProducts />
            </Box>
        </AllProductContextProvider>
    )
}