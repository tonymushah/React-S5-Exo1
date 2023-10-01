import { Box, Flex } from "@chakra-ui/react";
import HeaderSearchBar from "./HeaderSearchBar";

export default function Header(){
    return (
        <Flex>
            <Box alignSelf={"end"} margin={2}>
                <HeaderSearchBar/>
            </Box>
        </Flex>
    )
}