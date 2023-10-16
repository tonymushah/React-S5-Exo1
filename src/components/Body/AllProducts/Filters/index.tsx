import {
    Card, CardHeader, HStack, Heading,
    VStack
} from '@chakra-ui/react';
import FilterActiveSwitch from './FilterActiveSwitch';
import NumberInputWithAtom from './NumberInputWithAtom';
import { prixMaxAtom, prixMinAtom } from './atoms';

export default function Filters() {
    return (
        <Card borderColor={"gray.500"} borderWidth={"1px"}>
            <CardHeader>
                <HStack>
                    <Heading size={"md"} >
                        Filter
                    </Heading>
                    <FilterActiveSwitch />
                </HStack>
                <VStack>
                    <NumberInputWithAtom title="Prix&nbsp;Min&nbsp;: " atom={prixMinAtom} />
                    <NumberInputWithAtom title="Prix&nbsp;Max&nbsp;: " atom={prixMaxAtom} />
                </VStack>
            </CardHeader>
        </Card>
    )
}