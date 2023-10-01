import { Wrap, WrapItem } from "@chakra-ui/react";
import { useAllProductContextValue } from "../Product/useAllProductContextValue"
import ProductSimpleCard from "../../../Product/ProductSimpleCard";

export default function AllProductsContent(){
    const data = useAllProductContextValue();
    return (
        <Wrap>
            {data.map((value) => (
                <WrapItem key={value.id}>
                    <ProductSimpleCard value={value}/>
                </WrapItem>
            ))}
        </Wrap>
    )
}