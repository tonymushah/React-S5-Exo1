import { Text } from "@chakra-ui/react";
import { useProductSimpleCardAtomValue } from "../context";
import React from "react";

export default function Price(){
    const [value,] = useProductSimpleCardAtomValue();
    const { price } = React.useMemo(() => value, [value]);
    return (
        <Text>Prix : {price} Ar</Text>
    )
}