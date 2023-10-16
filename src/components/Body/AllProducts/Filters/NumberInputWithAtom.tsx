import { NumberInput, Text, HStack, NumberInputField, VStack, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";
import { PrimitiveAtom, useAtom } from "jotai";
import { isFilterActiveAtom } from "./atoms";

export default function NumberInputWithAtom({ atom, title }: {
    atom: PrimitiveAtom<number>
    title: string
}) {
    const [value, setValue] = useAtom(atom);
    const [isActive] = useAtom(isFilterActiveAtom);
    return (
        <NumberInput as={HStack} isDisabled={!isActive} onChange={(value) => {
            setValue(Number.parseInt(value));
        }} value={value}>
            <Text>{title}</Text>
            <NumberInputField/>
            <VStack>
                <NumberIncrementStepper />
                <NumberDecrementStepper
                //as={<IconButton aria-label='Decrement' icon={<Chevr} />} 
                />
            </VStack>
        </NumberInput>
    );
}