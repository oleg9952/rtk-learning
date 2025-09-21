import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

const selectFirstAndLastName = (state: RootState) => {
    return {
        firstName: state.user.firstName,
        lastName: state.user.lastName,
    }
}

export const selectFullName = createSelector(selectFirstAndLastName, ({ firstName, lastName }) => `${firstName} ${lastName}`)