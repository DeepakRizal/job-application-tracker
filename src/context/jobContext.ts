import { createContext } from "react";
import type { JobContextType } from "../types/type";

export const jobContext = createContext<JobContextType | undefined>(undefined);
