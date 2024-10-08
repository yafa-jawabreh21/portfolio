import { configureStore } from "@reduxjs/toolkit";
import { projectsSlice } from "./slices/Projects-slice";
import { skillsSlice } from "./slices/Skills-slice";

export const store = configureStore({
    reducer: {
        skills : skillsSlice ,
        projects : projectsSlice
    },
  })

