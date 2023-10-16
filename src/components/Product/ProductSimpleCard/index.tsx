import { Product } from "../../../types/Product";
import { PrimitiveAtom } from "jotai";
import ProductSimpleCardProvider from "./Provider";
import Layout from "./Inner/Layout";
import Body from "./Inner/Body";

export default function ProductSimpleCard({ value: _value_ }: {
    value: PrimitiveAtom<Product>
}) {
    return (
        <ProductSimpleCardProvider value={_value_}>
            <Layout>
                <Body/>
            </Layout>
        </ProductSimpleCardProvider>
    );
}