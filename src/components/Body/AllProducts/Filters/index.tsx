import {
    Card, CardHeader, HStack, Heading, Text,
    //IconButton, 
    NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, VStack
} from '@chakra-ui/react';

export default function Filters() {
    return (
        <Card borderColor={"gray.500"} borderWidth={"1px"}>
            <CardHeader>
                <Heading size={"md"} >
                    Filter
                </Heading>
                <VStack>
                    <NumberInput as={HStack}>
                        <Text>Prix&nbsp;Min&nbsp;: </Text>
                        <NumberInputField />
                        <VStack>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper
                            //as={<IconButton aria-label='Decrement' icon={<Chevr} />} 
                            />
                        </VStack>
                    </NumberInput>
                    <NumberInput as={HStack}>
                        <Text>Prix&nbsp;Max&nbsp;: </Text>
                        <NumberInputField />
                        <VStack>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper
                            //as={<IconButton aria-label='Decrement' icon={<Chevr} />} 
                            />
                        </VStack>
                    </NumberInput>
                </VStack>
            </CardHeader>
        </Card>
    )
}