import { useAtom } from "jotai";
import { isFilterActiveAtom } from "./atoms";
import { Switch } from "@chakra-ui/react";
import React from "react";

export default function FilterActiveSwitch(){
    const [isActive, setActive] = useAtom(isFilterActiveAtom);
    const [, startTransition] = React.useTransition();
    return (
        <Switch onChange={(e) => {
            startTransition(() => {
                setActive(e.currentTarget.checked);
            })
        }} isChecked={isActive}/>
    );
}