import React from "react";
import { context } from "./context";
import { spiltedDataAtom } from "../../../../lib/data/test";

export default function AllProductContextProvider({ value, children } : React.PropsWithChildren<{
    value: typeof spiltedDataAtom
}>){
    return (
        <context.Provider value={value}>
            {children}
        </context.Provider>
    )
}