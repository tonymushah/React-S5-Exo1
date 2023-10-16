import { Wrap, WrapItem } from "@chakra-ui/react";
import { useAllProductContextValue } from "../Product/useAllProductContextValue"
import ProductSimpleCard from "../../../Product/ProductSimpleCard";
import { useAtom } from "jotai";

export default function AllProductsContent(){
    const data_ = useAllProductContextValue();
    const [data,] = useAtom(data_);
    return (
        <Wrap>
            {data.map((value, index) => (
                <WrapItem key={`all-product-${index}`}>
                    <ProductSimpleCard value={value}/>
                </WrapItem>
            ))}
        </Wrap>
    )
}