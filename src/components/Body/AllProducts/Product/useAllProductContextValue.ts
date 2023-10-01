import React from "react";
import { context } from "./context";

export function useAllProductContextValue(){
    const data = React.useContext(context);
    if(data != undefined){
        return data;
    }else{
        throw new Error("The AllProductContextProvider value is undefined");
    }
}