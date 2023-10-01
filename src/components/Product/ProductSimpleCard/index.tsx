import { Box, Button, Card, CardBody, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Product } from "../../../types/Product";

export default function ProductSimpleCard({ value }: {
    value: Product
}) {
    const { image, name, price, stock } = React.useMemo(() => value, [value]);
    return (
        <Card width={"12em"}>
            <Image src={image} />
            <CardBody>
                <VStack alignItems={"start"}>
                    <Heading size={"md"}>{name}</Heading>
                    <Text>Price: {price} Ar</Text>
                    <Text>Stock: {stock}</Text>
                    <Box alignSelf={"center"}>
                        <Button size={"sm"} colorScheme={"facebook"}>Add to Card</Button>
                    </Box>
                </VStack>
            </CardBody>
        </Card>
    )
}