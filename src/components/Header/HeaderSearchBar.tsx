import { Button, HStack, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";

export default function HeaderSearchBar(){
    return (
        <HStack>
            <InputGroup size={"lg"}>
                <Input placeholder="Type something" />
                <InputRightAddon>
                    <Button>
                        Search
                    </Button>
                </InputRightAddon>
            </InputGroup>
        </HStack>
    )
}