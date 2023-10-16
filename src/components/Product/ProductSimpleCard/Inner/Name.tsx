import { Heading } from "@chakra-ui/react";
import { useProductSimpleCardAtomValue } from "../context";
import React from "react";

export default function Name(){
    const [value,] = useProductSimpleCardAtomValue();
    const { name } = React.useMemo(() => value, [value]);
    return (
        <Heading size={"md"}>{name}</Heading>
    )
}