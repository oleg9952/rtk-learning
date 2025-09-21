import { createSlice } from "@reduxjs/toolkit";

type UserState = {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    likedPostIds: string[];
}

const initialState: UserState = {
    firstName: 'Oleh',
    lastName: 'Parkhomenko',
    email: 'oleh.parkhomenko@gmail.com',
    age: 32,
    likedPostIds: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setAge: (state, action) => {
            state.age = action.payload;
        }
    }
})

export const { setFirstName, setLastName, setEmail, setAge } = userSlice.actions;
export default userSlice.reducer;