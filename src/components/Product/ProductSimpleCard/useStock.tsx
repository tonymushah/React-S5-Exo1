import React from "react";
import { useAtom } from "jotai";
import { focusAtom } from "jotai-optics";
import { useProductSimpleCardAtom } from "./context";

export function useStock({ startTransition }: { startTransition: typeof React.startTransition; }) {
    const value = useProductSimpleCardAtom();
    const stockAtom = React.useMemo(() => focusAtom(value, (optic) => optic.prop("stock")), [value]);
    const [stock, setStock] = useAtom(stockAtom);
    const isStockEmpty = React.useMemo(() => stock <= 0, [stock]);
    const decrement = React.useCallback(() => startTransition(() => {
        if (!isStockEmpty) {
            setStock(stock - 1);
        }
    }), [setStock, stock, startTransition, isStockEmpty]);
    return {
        setStock,
        stock,
        decrement,
        isStockEmpty
    };
}
