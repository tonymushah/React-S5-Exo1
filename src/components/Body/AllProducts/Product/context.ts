import React from "react";
import { spiltedDataAtom } from "../../../../lib/data/test";

export const context = React.createContext<typeof spiltedDataAtom | undefined>(undefined);