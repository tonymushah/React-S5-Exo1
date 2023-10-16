import React from "react";
import { useStock } from "../useStock";
import { Button, Box, Text } from "@chakra-ui/react";

export default function Stock() {
    const [isTransition, startTransition] = React.useTransition();
    const { decrement, stock, isStockEmpty } = useStock({
        startTransition
    });
    return (
        <React.Fragment>
            <Text>Stock: {stock}</Text>
            <Box alignSelf={"center"}>
                <Button size={"sm"} isLoading={isTransition} isDisabled={isStockEmpty} onClick={decrement} colorScheme={"facebook"}>Add to Card</Button>
            </Box>
        </React.Fragment>
    )
}