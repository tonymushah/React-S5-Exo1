import React from "react";
import { Product } from "../../../../types/Product";
import { context } from "./context";

export default function AllProductContextProvider({ value, children } : React.PropsWithChildren<{
    value: Array<Product>
}>){
    return (
        <context.Provider value={value}>
            {children}
        </context.Provider>
    )
}