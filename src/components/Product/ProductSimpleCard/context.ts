import { PrimitiveAtom, useAtom } from "jotai";
import { Product } from "../../../types/Product";
import React from "react";

export const context = React.createContext<PrimitiveAtom<Product> | undefined>(undefined);

export function useProductSimpleCardAtom(){
    const myAtom = React.useContext(context);
    if(myAtom != undefined){
        return myAtom;
    }else{
        throw new Error("the ProductSimpleCardProvider value must be provided");
    }
}

export function useProductSimpleCardAtomValue(){
    const theAtom = useProductSimpleCardAtom();
    return useAtom(theAtom);
}