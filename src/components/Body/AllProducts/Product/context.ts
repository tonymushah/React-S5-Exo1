import React from "react";
import { Product } from "../../../../types/Product";

export const context = React.createContext<Array<Product> | undefined>(undefined);