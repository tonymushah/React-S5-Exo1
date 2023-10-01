import { Box } from "@chakra-ui/react";
import React from "react";
import AllProducts from "./AllProducts";
import AllProductContextProvider from "./AllProducts/Product";
import { data } from "../../lib/data/test";

export default function Body() {
    return (
        <AllProductContextProvider value={data}>
            <Box width={"100vw"}>
                <AllProducts />
            </Box>
        </AllProductContextProvider>
    )
}