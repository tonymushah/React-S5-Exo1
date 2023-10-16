import { Box } from "@chakra-ui/react";
import AllProducts from "./AllProducts";
import AllProductContextProvider from "./AllProducts/Product";
import { useFilter } from "./AllProducts/Filters/hooks";

export default function Body() {
    const toUse = useFilter();
    return (
        <AllProductContextProvider value={toUse}>
            <Box width={"100vw"}>
                <AllProducts />
            </Box>
        </AllProductContextProvider>
    )
}