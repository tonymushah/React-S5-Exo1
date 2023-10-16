import { PrimitiveAtom } from "jotai";
import { Product } from "../../../types/Product";
import { context } from "./context";

export default function ProductSimpleCardProvider({ value, children } : React.PropsWithChildren<{
    value : PrimitiveAtom<Product>
}>){
    return (
        <context.Provider value={value}>
            {
                children
            }
        </context.Provider>
    );
}