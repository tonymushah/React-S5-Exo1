import { Box, Flex, Spacer } from "@chakra-ui/react";
import HeaderSearchBar from "./HeaderSearchBar";

export default function Header(){
    return (
        <Flex width={"100vw"} backgroundColor={"gray.900"}>
            <Spacer/>
            <Box margin={2}>
                <HeaderSearchBar/>
            </Box>
        </Flex>
    )
}