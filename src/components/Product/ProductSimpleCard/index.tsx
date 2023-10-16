import { Box, Button, Card, CardBody, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Product } from "../../../types/Product";
import { motion } from "framer-motion";

export default function ProductSimpleCard({ value }: {
    value: Product
}) {
    const [, startTransition] = React.useTransition();
    const { images: images_, name, price, stock } = React.useMemo(() => value, [value]);
    const [imageIndex, setImageIndex] = React.useState(0);
    const image = React.useMemo(() => images_[imageIndex], [imageIndex, images_]);
    const setImage = React.useCallback((input: number) => {
        startTransition(() => {
            setImageIndex(input);
        })
    }, [startTransition, setImageIndex]);
    return (
        <Card width={"16em"}>
            <Image width={"16em"} as={motion.img} layoutId={`product-${value.id}-${imageIndex}`} key={`product-${value.id}-${imageIndex}`} src={image} />
            <CardBody>
                <HStack maxHeight={"3em"} alignItems={"center"}>
                    {images_.map((v, index) => {
                        if(index == imageIndex){
                            return (<React.Fragment key={`product-${value.id}-${imageIndex}-inactive`}/>)
                        }else{
                            return (<Image maxHeight={"3em"} onClick={() => setImage(index)} as={motion.img} layoutId={`product-${value.id}-${index}`} key={`product-${value.id}-${index}`} src={v} />)
                        }
                    })}
                </HStack>
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