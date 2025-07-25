import { useContext } from "react";

import type { JobContextType } from "../types/type";
import { jobContext } from "../context/jobContext";

export const useJobContext = (): JobContextType => {
  const context = useContext(jobContext);
  if (!context) {
    throw new Error("useJobContext must be used within a JobProvider");
  }
  return context;
};
