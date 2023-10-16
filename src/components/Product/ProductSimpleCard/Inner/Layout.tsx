import { Card } from "@chakra-ui/react";
import React from "react";

export default function Layout({ children } : React.PropsWithChildren){
    return (
        <Card width={"16em"} borderColor={"gray.500"} borderWidth={"1px"}>
            {
                children
            }
        </Card>
    )
}