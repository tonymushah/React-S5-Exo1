import React from "react";
import { useProductSimpleCardAtomValue } from "../context";
import { CardBody, Image, HStack, VStack, Center, } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Name from "./Name";
import Price from "./Price";
import Stock from "./Stock";

function useBodyState() {
    const [, startTransition] = React.useTransition();
    const [value] = useProductSimpleCardAtomValue();
    const { images: images_ } = React.useMemo(() => value, [value]);
    const [imageIndex, setImageIndex] = React.useState(0);
    const image = React.useMemo(() => images_[imageIndex], [imageIndex, images_]);
    const setImage = React.useCallback((input: number) => {
        startTransition(() => {
            setImageIndex(input);
        })
    }, [startTransition, setImageIndex]);
    return {
        image,
        setImage,
        images_,
        value,
        imageIndex
    }
}

export default function Body() {
    const { image, setImage, images_, value, imageIndex, } = useBodyState();
    return (
        <React.Fragment>
            <Center pt={3}>
                <Image height={"202px"} width={"237px"} as={motion.img} layoutId={`product-${value.id}-${imageIndex}`} key={`product-${value.id}-${imageIndex}`} src={image} />
            </Center>
            <CardBody>
                <Center>
                    <HStack maxHeight={"3em"} alignItems={"center"}>
                        {images_.map((v, index) => {
                            if (index == imageIndex) {
                                return (<React.Fragment key={`product-${value.id}-${imageIndex}-inactive`} />)
                            } else {
                                return (<Image width={"47px"} height={"38px"} onClick={() => setImage(index)} as={motion.img} layoutId={`product-${value.id}-${index}`} key={`product-${value.id}-${index}`} src={v} />)
                            }
                        })}
                    </HStack>
                </Center>
                <VStack alignItems={"start"}>
                    <Name />
                    <Price />
                    <Stock />
                </VStack>
            </CardBody>
        </React.Fragment>
    )
}