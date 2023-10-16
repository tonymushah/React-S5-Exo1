import { atom, useAtom } from "jotai";
import { isFilterActiveAtom, prixMaxAtom, prixMinAtom } from "./atoms";
import { spiltedDataAtom } from '../../../../lib/data/test';
import React from "react";

export function usePrixFilter() : typeof spiltedDataAtom {
    const [prixMin] = useAtom(prixMinAtom);
    const [prixMax] = useAtom(prixMaxAtom);
    return React.useMemo(() => { 
        const initialAtom = atom((get) => get(spiltedDataAtom).filter((data) => {
            const { price } = get(data);
            return prixMin < price && price < prixMax
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }), (_get, set, args: any) => set(spiltedDataAtom, args));
        return initialAtom;
    }, [prixMax, prixMin]);
}

export function useFilter(){
    const [isActive] = useAtom(isFilterActiveAtom);
    const data = usePrixFilter();
    if(isActive){
        return data;
    }else{
        return spiltedDataAtom;
    }
}