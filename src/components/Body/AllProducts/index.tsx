import { Grid, GridItem, Heading, Stack } from "@chakra-ui/react";
import Filters from "./Filters";
import AllProductsContent from "./AllProductsContent";

export default function AllProducts() {
    return (
        <Stack margin={2}>
            <Heading>All Products</Heading>
            <Grid templateColumns={"repeat(12, 1fr)"}>
                <GridItem colSpan={8}>
                    <AllProductsContent />
                </GridItem>
                <GridItem colSpan={4}>
                    <Filters />
                </GridItem>
            </Grid>
        </Stack>
    );
}