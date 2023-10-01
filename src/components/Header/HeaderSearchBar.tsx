import { Button, HStack, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";

export default function HeaderSearchBar(){
    return (
        <HStack>
            <InputGroup size={"md"}>
                <Input placeholder="Type something" color={"gray.100"} />
                <InputRightAddon>
                    <Button>
                        Search
                    </Button>
                </InputRightAddon>
            </InputGroup>
        </HStack>
    )
}